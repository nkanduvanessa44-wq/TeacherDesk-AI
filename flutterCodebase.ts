// Flutter Codebase Module definitions for TeacherDesk AI

export interface FlutterCodeBlock {
  fileName: string;
  language: string;
  description: string;
  code: string;
}

export const FLUTTER_CODEBASE: FlutterCodeBlock[] = [
  {
    fileName: "architecture_layout.txt",
    language: "text",
    description: "Feature-Based Clean Architecture Folder Structure",
    code: `teacherdesk_ai/
├── android/                  # Native Android Configuration
├── ios/                      # Native iOS Configuration
├── lib/
│   ├── main.dart             # Main Entry Point with ProviderScope
│   ├── core/
│   │   ├── theme/            # App styles (Education Blue)
│   │   ├── database/         # SQLite Helper classes
│   │   ├── network/          # Supabase client & API proxy
│   │   ├── utils/            # PDF and Export modules
│   │   └── widgets/          # Shared layout components
│   ├── features/
│   │   ├── auth/             # Sign-in models, offline-bypass
│   │   ├── dashboard/        # Complex responsive grid view
│   │   ├── curriculum/       # Curriculum documents switcher
│   │   ├── lesson_plans/     # Generator page, editable forms
│   │   ├── schemes/          # Weekly timeline planner
│   │   ├── sba_tracker/      # Real-time mark-entry spreadsheet
│   │   ├── resources/        # Local materials cache
│   │   └── diagram_studio/   # Vector drawings model annotations
└── pubspec.yaml              # App asset requirements & Flutter configurations
`
  },
  {
    fileName: "pubspec.yaml",
    language: "yaml",
    description: "Optimal Flutter dependency specification",
    code: `name: teacherdesk_ai
description: A complete AI-backed teacher productivity platform for African classrooms.
version: 1.0.0+1

environment:
  sdk: '>=3.2.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.4.9       # Modern State Management
  riverpod_annotation: ^2.3.3
  sqflite: ^2.3.0                # Offline-first SQLite DB
  path: ^1.8.3
  supabase_flutter: ^2.4.0       # Durable Cloud Synchronization
  google_generative_ai: ^0.2.2   # Multi-modal Gemini API integration
  pdf: ^3.10.7                   # Print & Export system offline
  share_plus: ^7.2.1             # Easy doc sharing
  image_picker: ^1.0.7           # OCR Document Scanner camera/photo
  google_mlkit_text_recognition: ^0.11.0 # Local On-device Offline OCR
  fl_chart: ^0.66.0              # SBA Progress tracking graphs
  shimmer: ^3.1.0                # Progressive loading UX
  google_fonts: ^6.1.0           # Elegant Typography pairing
  lucide_icons: ^0.320.0         # Modern clean vectors

dev_dependencies:
  flutter_test:
    sdk: flutter
  riverpod_generator: ^2.3.9
  build_runner: ^2.4.8

flutter:
  uses-material-design: true
  assets:
    - assets/curriculum/
    - assets/images/
`
  },
  {
    fileName: "local_database.dart",
    language: "dart",
    description: "SQLite Database Local Sync System (Offline-First)",
    code: `import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class LocalDatabaseHelper {
  static final LocalDatabaseHelper instance = LocalDatabaseHelper._init();
  static Database? _database;

  LocalDatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('teacherdesk.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(
      path,
      version: 1,
      onCreate: _createDB,
    );
  }

  Future _createDB(Database db, int version) async {
    // Lesson plans schema
    await db.execute('''
      CREATE TABLE lesson_plans (
        id TEXT PRIMARY KEY,
        subject TEXT NOT NULL,
        grade TEXT NOT NULL,
        topic TEXT NOT NULL,
        subtopic TEXT NOT NULL,
        curriculumVersion TEXT NOT NULL,
        duration TEXT NOT NULL,
        lessonTitle TEXT NOT NULL,
        competencies TEXT,
        learningOutcomes TEXT,
        objectives TEXT,
        introduction TEXT,
        teacherActivities TEXT,
        learnerActivities TEXT,
        teachingMaterials TEXT,
        assessment TEXT,
        reflection TEXT,
        homework TEXT,
        createdAt TEXT NOT NULL,
        isSynced INTEGER DEFAULT 0
      )
    ''');

    // Students schema
    await db.execute('''
      CREATE TABLE students (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        rollNo TEXT NOT NULL
      )
    ''');

    // SBA Assessments schema
    await db.execute('''
      CREATE TABLE sba_assessments (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        date TEXT NOT NULL,
        maxMarks INTEGER NOT NULL,
        weightPercent INTEGER,
        competencyTargeted TEXT
      )
    ''');

    // Marks entry schema
    await db.execute('''
      CREATE TABLE sba_marks (
        studentId TEXT,
        assessmentId TEXT,
        score REAL,
        competencyAchieved INTEGER,
        feedback TEXT,
        PRIMARY KEY (studentId, assessmentId)
      )
    ''');
  }

  // Generic Save and Sync helpers
  Future<void> saveLessonPlan(Map<String, dynamic> plan) async {
    final db = await instance.database;
    await db.insert(
      'lesson_plans',
      plan,
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<List<Map<String, dynamic>>> getUnsyncedLessonPlans() async {
    final db = await instance.database;
    return await db.query(
      'lesson_plans',
      where: 'isSynced = ?',
      whereArgs: [0],
    );
  }

  Future<void> markLessonSynced(String id) async {
    final db = await instance.database;
    await db.update(
      'lesson_plans',
      {'isSynced': 1},
      where: 'id = ?',
      whereArgs: [id],
    );
  }
}
`
  },
  {
    fileName: "gemini_service.dart",
    language: "dart",
    description: "Curriculum-Aware Gemini AI Integration in Flutter",
    code: `import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class GeminiApiService {
  final String apiKey;
  late final GenerativeModel model;

  GeminiApiService({required this.apiKey}) {
    model = GenerativeModel(
      model: 'gemini-3.5-flash',
      apiKey: apiKey,
      generationConfig: GenerationConfig(
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      ),
      systemInstruction: Content.system(
        "You are TeacherDesk AI, a dedicated assistant for African primary/secondary teachers. "
        "All lesson plans must be structured according to syllabus standards for either old content "
        "or the outcome-based New Curriculum. Support teachers with regional benchmarks, clear time divisions, "
        "and direct recommendations for locally sources resources (e.g. water bottles, chalkboard, yardsticks)."
      ),
    );
  }

  Future<String> generateLessonPlan({
    required String subject,
    required String grade,
    required String topic,
    required String subtopic,
    required String curriculumVersion,
    required String duration,
  }) async {
    final prompt = """
Generate a comprehensive professional lesson plan in Markdown:
- Subject: $subject
- Grade: $grade
- Topic: $topic
- Subtopic: $subtopic
- Curriculum Structure: $curriculumVersion
- Estimated Duration: $duration

Provide elements in these major keys:
1. Lesson Title
2. Key Competencies
3. Learning Outcomes
4. Lesson Objectives (measurable)
5. Step-by-Step Introduction (duration)
6. Teacher Activities list
7. Learner Activities list
8. Locally Sourced Teaching Materials
9. Quick SBA Assessment criteria
10. Homework Assignment
""";

    final content = [Content.text(prompt)];
    final response = await model.generateContent(content);
    return response.text ?? "Error generating lesson content.";
  }
}
`
  },
  {
    fileName: "lesson_plan_provider.dart",
    language: "dart",
    description: "Riverpod offline-first lesson plan state notifier",
    code: `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'local_database.dart';
import 'gemini_service.dart';

class LessonPlanState {
  final List<Map<String, dynamic>> plans;
  final bool isLoading;
  final String? errorMessage;

  LessonPlanState({
    required this.plans,
    this.isLoading = false,
    this.errorMessage,
  });

  LessonPlanState copyWith({
    List<Map<String, dynamic>>? plans,
    bool? isLoading,
    String? errorMessage,
  }) {
    return LessonPlanState(
      plans: plans ?? this.plans,
      isLoading: isLoading ?? this.isLoading,
      errorMessage: errorMessage ?? this.errorMessage,
    );
  }
}

class LessonPlanNotifier extends StateNotifier<LessonPlanState> {
  final GeminiApiService _apiService;

  LessonPlanNotifier(this._apiService) : super(LessonPlanState(plans: [])) {
    loadLocalPlans();
  }

  Future<void> loadLocalPlans() async {
    state = state.copyWith(isLoading: true);
    try {
      final db = await LocalDatabaseHelper.instance.database;
      final localPlans = await db.query('lesson_plans', orderBy: 'createdAt DESC');
      state = state.copyWith(plans: localPlans, isLoading: false);
    } catch (e) {
      state = state.copyWith(isLoading: false, errorMessage: e.toString());
    }
  }

  Future<void> createAndSavePlan({
    required String id,
    required String subject,
    required String grade,
    required String topic,
    required String subtopic,
    required String curriculum,
    required String duration,
  }) async {
    state = state.copyWith(isLoading: true);
    try {
      final text = await _apiService.generateLessonPlan(
        subject: subject,
        grade: grade,
        topic: topic,
        subtopic: subtopic,
        curriculumVersion: curriculum,
        duration: duration,
      );

      final Map<String, dynamic> newPlan = {
        'id': id,
        'subject': subject,
        'grade': grade,
        'topic': topic,
        'subtopic': subtopic,
        'curriculumVersion': curriculum,
        'duration': duration,
        'lessonTitle': "Study on $subtopic",
        'learningOutcomes': "Successfully map out $subtopic",
        'competencies': "Practical expertise in $topic",
        'introduction': "Introduce $subtopic in class minutes.",
        'teacherActivities': "Guided overview of the curriculum content.",
        'learnerActivities': "Interactive diagrams and classroom team exercises.",
        'teachingMaterials': "Chalkboard and regional references.",
        'assessment': "Constructive short SBA questionnaire.",
        'reflection': "Self-reflection on learner responsiveness.",
        'homework': "Study on next subtopic and local workbook questions.",
        'createdAt': DateTime.now().toIso8601String(),
        'isSynced': 0,
      };

      await LocalDatabaseHelper.instance.saveLessonPlan(newPlan);
      await loadLocalPlans();
    } catch (e) {
      state = state.copyWith(isLoading: false, errorMessage: e.toString());
    }
  }
}

// Global Provider API access
final geminiProvider = Provider<GeminiApiService>((ref) {
  return GeminiApiService(apiKey: "API-KEY-LOADED");
});

final lessonPlanProvider = StateNotifierProvider<LessonPlanNotifier, LessonPlanState>((ref) {
  final api = ref.watch(geminiProvider);
  return LessonPlanNotifier(api);
});
`
  },
  {
    fileName: "dashboard_screen.dart",
    language: "dart",
    description: "Responsive multi-platform Grid Dashboard layout",
    code: `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class TeacherDashboardScreen extends ConsumerWidget {
  const TeacherDashboardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final size = MediaQuery.of(context).size;
    // Determine responsive column counts
    final crossAxisCount = size.width < 600 ? 2 : (size.width < 1000 ? 3 : 4);

    return Scaffold(
      backgroundColor: const Color(0xFFF1F5F9), // App Background
      appBar: AppBar(
        title: const Text('TeacherDesk AI - Kabulonga Boys'),
        backgroundColor: const Color(0xFF0369A1), // Elegant Education Blue
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.sync_outlined, color: Colors.white),
            tooltip: 'Sync Supabase Database',
          ),
          const CircleAvatar(
            backgroundColor: Colors.white30,
            child: Icon(Icons.person, color: Colors.white),
          ),
          const SizedBox(width: 16),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildTeacherWelcomeCard(),
              const SizedBox(height: 24),
              const Text(
                'YOUR DIGITAL DESK',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.2,
                  color: Color(0xFF334155),
                ),
              ),
              const SizedBox(height: 12),
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: crossAxisCount,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                childAspectRatio: 1.2,
                children: [
                  _buildDeskCard(context, 'Lesson Plans', Icons.menu_book, const Color(0xFF0284C7)),
                  _buildDeskCard(context, 'Schemes of Work', Icons.calendar_view_week, const Color(0xFFE11D48)),
                  _buildDeskCard(context, 'SBA Tracker', Icons.analytics_outlined, const Color(0xFF16A34A)),
                  _buildDeskCard(context, 'AI Chat Assistant', Icons.assistant, const Color(0xFF7C3AED)),
                  _buildDeskCard(context, 'Diagram Studio', Icons.brush_outlined, const Color(0xFFEA580C)),
                  _buildDeskCard(context, 'Curriculum Library', Icons.library_books, const Color(0xFF0F766E)),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTeacherWelcomeCard() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF0369A1),
        borderRadius: BorderRadius.circular(16),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Muli Bwanji, Teacher Chanda Mwansa',
            style: TextStyle(fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 4),
          Text(
            'School: Kabulonga Boys Secondary | Province: Lusaka',
            style: TextStyle(color: Colors.white70),
          ),
        ],
      ),
    );
  }

  Widget _buildDeskCard(BuildContext ctx, String label, IconData icon, Color color) {
    return InkWell(
      onTap: () {
        ScaffoldMessenger.of(ctx).showSnackBar(
          SnackBar(content: Text('Opening $label...')),
        );
      },
      borderRadius: BorderRadius.circular(12),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: const [
            BoxShadow(
              color: Colors.black05,
              blurRadius: 6,
              offset: Offset(0, 3),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircleAvatar(
              backgroundColor: color.withOpacity(0.1),
              radius: 24,
              child: Icon(icon, color: color, size: 28),
            ),
            const SizedBox(height: 12),
            Text(
              label,
              textAlign: TextAlign.center,
              style: const TextStyle(fontWeight: FontWeight.w600, color: Color(0xFF1E293B)),
            ),
          ],
        ),
      ),
    );
  }
}
`
  }
];
