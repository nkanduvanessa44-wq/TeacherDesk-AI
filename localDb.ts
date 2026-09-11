import { 
  TeacherProfile, LessonPlan, SchemeOfWork, Student, 
  SBAAssessment, SBAMark, TeachingResource, SavedDiagram, 
  CalendarEvent, TeacherSettings, CurriculumType, ChatSession, QuizResult
} from "./types";

// Seed data keys
const KEYS = {
  PROFILE: "td_profile",
  LESSON_PLANS: "td_lessons",
  SCHEMES: "td_schemes",
  STUDENTS: "td_students",
  ASSESSMENTS: "td_assessments",
  MARKS: "td_marks",
  RESOURCES: "td_resources",
  DIAGRAMS: "td_diagrams",
  CALENDAR: "td_calendar",
  SETTINGS: "td_settings",
  SESSIONS: "td_chat_sessions",
  PENDING_CHANGES: "td_pending_changes",
  QUIZ_RESULTS: "td_quiz_results",
};

// INITIAL SEED DATA
const defaultProfile: TeacherProfile = {
  name: "Chanda Mwansa",
  nrcId: "123456/10/1",
  school: "Kabulonga Boys Secondary School",
  province: "Lusaka",
  subjects: ["Biology", "Integrated Science", "Mathematics"],
  grades: ["Grade 8", "Grade 9", "Grade 10"],
  phoneNumber: "+260 977 123456",
  email: "nkanduvanessa44@gmail.com", // Derived from user context
};

const defaultSettings: TeacherSettings = {
  theme: "education-blue",
  language: "English",
  curriculumPreference: "New Curriculum",
  schoolTerm: "Term 2",
  syncWithSupabase: false,
};

const defaultLessons: LessonPlan[] = [
  {
    id: "l-1",
    subject: "Biology",
    grade: "Grade 8",
    topic: "Ecosystems and Environment",
    subtopic: "Food Chains and Webs",
    curriculumVersion: "New Curriculum",
    duration: "80 minutes",
    lessonTitle: "Understanding Trophic Relationships in Zambian Savannas",
    competencies: "Analyze food chains, trace energy from producer to consumer, and explain balance in an ecosystem.",
    learningOutcomes: "Pupils should be able to identify trophic levels, define producers, consumers and decomposers, and draw biological food web arrows correctly.",
    objectives: "1. Distinguish between producers, primary consumers, secondary consumers, and decomposers.\n2. Trace energy flow through a 4-level savanna food chain.",
    introduction: "Begin class by showing pictures of local Kafue Lechwe (antelope), grass, and lions. Ask pupils: 'What eats what to survive in our national parks?' Conduct a 5-minute brainstorm on the whiteboard.",
    teacherActivities: "1. Explain food chains using SAVANNA illustrations.\n2. Introduce arrow directions representing 'energy flow to' consumers.\n3. Assist pupils in constructing a collaborative web on the chalkboard.",
    learnerActivities: "1. Record key term definitions in notebooks.\n2. In pairs, assemble a 4-organism food chain using native cards (Grass -> Grasshopper -> Lizard -> Eagle).\n3. Complete self-check definitions.",
    teachingMaterials: "Whiteboard, textbook Chapter 4, card cutouts of Zambian organisms (maize, caterpillar, village chicken, hawk).",
    assessment: "Provide a quick diagram of a food web containing 5 organisms. Instruct learners to list 2 separate chains and label each organism's level.",
    reflection: "Pupils understood feeding patterns immediately. However, several initially pointed arrows backwards (e.g. from eater to food). Need to re-emphasize direction of energy flow tomorrow.",
    homework: "Draw a food web representing a school garden or compound ecosystem, containing at least 6 distinct organisms.",
    createdAt: "2026-06-18T10:00:00Z"
  }
];

const defaultSchemes: SchemeOfWork[] = [
  {
    id: "s-1",
    subject: "Integrated Science",
    grade: "Grade 8",
    term: "Term 2",
    curriculumVersion: "New Curriculum",
    weeks: [
      {
        weekNo: 1,
        topic: "Ecosystems and Environment",
        subtopic: "Habitat and Ecosystem Elements",
        competencies: "Identify biotic versus abiotic variables in Kabulonga",
        learningOutcomes: "Categorize terrestrial and aquatic components",
        teachingResources: "School grounds, magnifying glass, worksheet #1",
        assessmentMethods: "Diagnostic field checklist review"
      },
      {
        weekNo: 2,
        topic: "Ecosystems and Environment",
        subtopic: "Food Chains and Webs",
        competencies: "Trace trophic paths in Savannas",
        learningOutcomes: "Compile food webs including omnivores",
        teachingResources: "Savanna flashcard kits, projector, local diagrams",
        assessmentMethods: "Constructive quiz and labeling drawing task"
      },
      {
        weekNo: 3,
        topic: "The Human Digestive System",
        subtopic: "Anatomy of the Gut",
        competencies: "Recall esophagus, stomach and intestines",
        learningOutcomes: "Draw and identify primary parts of digestion",
        teachingResources: "Anatomy torso scale model, workbook page 22",
        assessmentMethods: "Classwork drawing test and labeling labels"
      },
      {
        weekNo: 4,
        topic: "The Human Digestive System",
        subtopic: "Enzymatic Actions",
        competencies: "Compare salivary amylase and pepsin",
        learningOutcomes: "Define enzymes and describe temperature effects",
        teachingResources: "Starch solutions test tubes, iodine drops",
        assessmentMethods: "SBA Practical lab report collection"
      }
    ],
    createdAt: "2026-06-15T08:00:00Z"
  }
];

const defaultStudents: Student[] = [
  { id: "st-1", name: "Aliness Phiri", rollNo: "001" },
  { id: "st-2", name: "Benson Chilufya", rollNo: "002" },
  { id: "st-3", name: "Chansa Kabwe", rollNo: "003" },
  { id: "st-4", name: "Doreen Namukanji", rollNo: "004" },
  { id: "st-5", name: "Emmanuel Banda", rollNo: "005" },
  { id: "st-6", name: "Gift Zulu", rollNo: "006" },
  { id: "st-7", name: "Hellen Tembo", rollNo: "007" },
  { id: "st-8", name: "Israel Mulenga", rollNo: "008" },
];

const defaultAssessments: SBAAssessment[] = [
  {
    id: "a-1",
    title: "Mid-Term Written Test",
    type: "Test",
    date: "2026-06-10",
    maxMarks: 50,
    weightPercent: 30,
    competencyTargeted: "Cognitive knowledge, definitions, and short answers",
    subject: "Mathematics"
  },
  {
    id: "a-2",
    title: "Ecosystem Food Chain Poster",
    type: "Project",
    date: "2026-06-14",
    maxMarks: 20,
    weightPercent: 20,
    competencyTargeted: "Diagram precision, energy arrow arrows, and label hygiene",
    subject: "Science"
  },
  {
    id: "a-3",
    title: "Enzyme Digestion Experiment",
    type: "Practical Work",
    date: "2026-06-19",
    maxMarks: 10,
    weightPercent: 15,
    competencyTargeted: "Observation skills, lab hygiene, and analytical records",
    subject: "Biology"
  }
];

const defaultMarks: SBAMark[] = [
  // Test marks
  { studentId: "st-1", assessmentId: "a-1", score: 42, competencyAchieved: true, feedback: "Excellent grasp of ecosystems." },
  { studentId: "st-2", assessmentId: "a-1", score: 28, competencyAchieved: false, feedback: "Struggled with digestive enzyme functions." },
  { studentId: "st-3", assessmentId: "a-1", score: 35, competencyAchieved: true, feedback: "Good diagrams, check spellings." },
  { studentId: "st-4", assessmentId: "a-1", score: 48, competencyAchieved: true, feedback: "Outstanding scores! High potential." },
  { studentId: "st-5", assessmentId: "a-1", score: 19, competencyAchieved: false, feedback: "Needs remedial classes on food chains." },
  { studentId: "st-6", assessmentId: "a-1", score: 31, competencyAchieved: true, feedback: "Solid pass, work on definitions." },
  { studentId: "st-7", assessmentId: "a-1", score: 38, competencyAchieved: true, feedback: "Very neat letter work." },
  { studentId: "st-8", assessmentId: "a-1", score: 44, competencyAchieved: true, feedback: "Impressive analytical reasoning." },

  // Project marks
  { studentId: "st-1", assessmentId: "a-2", score: 18, competencyAchieved: true, feedback: "Beautiful poster with rich colors." },
  { studentId: "st-2", assessmentId: "a-2", score: 12, competencyAchieved: true, feedback: "Arrows drawn correctly. Good effort." },
  { studentId: "st-3", assessmentId: "a-2", score: 15, competencyAchieved: true, feedback: "Comprehensive details on savanna decomposers." },
  { studentId: "st-4", assessmentId: "a-2", score: 20, competencyAchieved: true, feedback: "Masterpiece! Kept in staff room." },
  { studentId: "st-5", assessmentId: "a-2", score: 9,  competencyAchieved: false, feedback: "Forgot arrowheads, please redo." },
  { studentId: "st-6", assessmentId: "a-2", score: 14, competencyAchieved: true, feedback: "Good, but included non-Zambian species (panda)." },

  // Practical marks (partial entries for dynamic teacher entry)
  { studentId: "st-1", assessmentId: "a-3", score: 9, competencyAchieved: true, feedback: "Excellent lab observations." },
  { studentId: "st-4", assessmentId: "a-3", score: 10, competencyAchieved: true, feedback: "Precise measurements and hypothesis." },
];

const defaultResources: TeachingResource[] = [
  {
    id: "r-1",
    title: "Grade 8 Food Chains Study Note",
    category: "Notes",
    subject: "Integrated Science",
    grade: "Grade 8",
    curriculum: "New Curriculum",
    topic: "Ecosystems and Environment",
    content: "# Trophic Levels Study Note\n\n- **Producer**: Always green plants (e.g. Grass, Maize). Converts sunlight into chemical energy using chlorophyll.\n- **Primary Consumer**: Herbivores that feed directly on producers (e.g. Caterpillar, Kafue Lechwe).\n- **Secondary Consumer**: Carnivores or Omnivores that eat primary consumers (e.g. Village Chicken, Lizard).\n- **Tertiary Consumer**: Secondary carnivores (e.g. Eagle, Lion).\n- **Decomposer**: Fungi and bacteria that break down dead materials, returning minerals back to the soil.\n\n*Important Guideline for Exams*: Ensure that arrowheads point in the direction of food transfer (i.e. 'eaten by'), from grass to worm, and worm to fowl.",
    createdAt: "2026-06-17T12:00:00Z"
  },
  {
    id: "r-2",
    title: "Common Digestion Questions",
    category: "Worksheet",
    subject: "Biology",
    grade: "Grade 8",
    curriculum: "New Curriculum",
    topic: "The Human Digestive System",
    content: "## Quick Worksheet: Digestion in Humans\n\n1. State the name of the digestive juice produced by the salivary glands and state the enzyme contains. (3 Marks)\n2. Explain why the stomach produces hydrochloric acid during food ingestion. (2 Marks)\n3. Describe two primary adaptations of the ileum (small intestine) that facilitate high nutrient absorption. (4 Marks)\n\n**Answers Keys:**\n1. Saliva; contains Amylase (converts starch to maltose).\n2. To kill harmful pathogens/bacteria and provide acidic pH level (pH 2) optimal for pepsin engine.\n3. Large surface area due to villi/microvilli, and thin walls with high blood capillary density.",
    createdAt: "2026-06-18T14:30:00Z"
  },
  {
    id: "r-ece",
    title: "Early Childhood Education National Syllabus",
    category: "Curriculum Document",
    subject: "Early Childhood Education",
    grade: "Grade 1",
    curriculum: "New Curriculum",
    topic: "Pre-Literacy & Language",
    content: "# Early Childhood Education National Syllabus\n\n## Section A: 4 - 5 Years\n\n### 1. Pre-Literacy and Language\n#### 1.1 English Language\n- **Introduction**: Focuses on listening, speaking, pre-reading, and pre-writing competencies.\n- **Learning Activities**: Responding to own name, friend's name, naming family members, and identifying household and environmental objects.\n- **Expected Standards**: Oral responses and object identification.\n\n#### 1.2 Zambian Languages\n- **Letter Sounds**: Introduce letter recognition, phonemic awareness, and simple words.\n- **Pre-Writing**: Focus on eye-hand coordination, tracing, copying, and free scribbling.",
    createdAt: "2026-06-22T07:10:00Z"
  },
  {
    id: "r-math",
    title: "Secondary Mathematics I National Syllabus",
    category: "Curriculum Document",
    subject: "Mathematics",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Sets & Venn Diagrams",
    content: "# Secondary Mathematics I National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Numbers and Approximation (Form 1)\n- **Learning Activities**: Exploring whole numbers, integers, fractions, indices notation, and standard scientific representations.\n- **Estimation**: Interpreting absolute, relative, and percentage errors.\n\n### 2. Sets and Venn Diagrams\n- **Operations**: Shading union, intersection, and complements on diagrams of up to 3 sets.\n\n### 3. Coordinate Geometry & Algebra (Form 2)\n- **Straight Lines**: Calculating gradients, mid-points, and linear equations (y = mx + c).\n\n### 4. Trigonometry and Transformation (Form 3 & 4)\n- **Calculations**: Sine and Cosine rules for scalene triangles; three-figure bearings; matrix operations.",
    createdAt: "2026-06-22T07:11:00Z"
  },
  {
    id: "r-fashion",
    title: "Fashion and Fabrics National Syllabus",
    category: "Curriculum Document",
    subject: "Fashion and Fabrics",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Pattern Drafting & Garment Realisation",
    content: "# Fashion and Fabrics Secondary Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Introduction to Textiles & Clothing\n- **Terminology**: Define fashion, fabrics, weaves, and career paths.\n- **Workroom Safety**: Operating sewing machines safely; keeping fingers clear of needles; managing sharp cutting shears safely.\n\n### 2. Sewing Construction Processes\n- **Stitches**: Working out hand stitches (neatening, temporary, and joining).\n- **Structural Finishes**: Open and French seams; casing and waistband closures; continuous wrap openings; button loops and zip attachment.\n\n### 3. Textiles Crafts & Pattern Drafting\n- **Body Measurements**: Take accurate chest, waist, and hip size measurements.\n- **Pattern Alteration**: Modify patterns to adapt to various figure types and irregular figures.",
    createdAt: "2026-06-22T07:12:00Z"
  },
  {
    id: "r-accounts",
    title: "Principles of Accounts National Syllabus",
    category: "Curriculum Document",
    subject: "Principles of Accounts",
    grade: "Grade 11",
    curriculum: "New Curriculum",
    topic: "Book Adjustments & Reconciliation",
    content: "# Principles of Accounts National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Introduction and Double Entry\n- **The Accounting Equation**: Assets = Capital + Liabilities.\n- **Ledgers**: Operating double entry debit and credit principles; balancing off ledger accounts.\n\n### 2. Books of Prime Entry\n- **Journals**: Posting sales, purchases, and returns day books from original invoices.\n- **Cash Book**: Compiling single, double, and three-column cash books, including petty cash vouchers.\n\n### 3. Final Accounts of a Sole Trader\n- **Statements**: Preparing the Trading, Profit or Loss Account and Balance Sheets.\n- **Adjustments**: Ledger adjustments for accruals, prepayments, bad debts, and depreciation.",
    createdAt: "2026-06-22T07:13:00Z"
  },
  {
    id: "r-agric",
    title: "Agricultural Science National Syllabus",
    category: "Curriculum Document",
    subject: "Agricultural Science",
    grade: "Grade 9",
    curriculum: "New Curriculum",
    topic: "Climate-Smart Agriculture",
    content: "# Agricultural Science National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Agriculture in Zambia\n- **Agro-Ecological Zones**: Outline the major rainfall and crop zones of Zambia.\n\n### 2. Soil & Irrigation Science\n- **Composition**: Soil air, water, mineral fragments, and organic matter.\n- **Fertility**: Nutrient cycles (carbon and nitrogen cycles); Straight and compound NPK fertilizers application.\n\n### 3. Climate-Smart Agriculture\n- **Sustainable Practices**: Practice zero tillage, organic mulching, water harvesting, and drought-resistant seeds.\n\n### 4. Livestock & Farm Management\n- **Poultry & Piggery**: Deep-litter vs battery setups; farrowing and nutritional feed formulation.\n- **Farm Bookkeeping**: Preparing profit and loss accounts, inventories, and gross margin calculations.",
    createdAt: "2026-06-22T07:14:00Z"
  },
  {
    id: "r-civic",
    title: "Civic Education National Syllabus",
    category: "Curriculum Document",
    subject: "Civic Education",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Corruption & Crime",
    content: "# Civic Education National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Citizen & Constitutional Rights\n- **Civics**: Definition and goals of civic learning.\n- **Zambian Constitution**: The Bill of Rights and citizenship acquisition types.\n\n### 2. Political Development & Governance\n- **History**: Zambia democratic milestones from 1890 to present.\n- **Elections**: The role of the Electoral Commission of Zambia (ECZ).\n\n### 3. Corruption, Law & Finance\n- **ACC & Crime**: Institutions fighting corrupt practices (Anti-Corruption Commission); effects of substance abuse.\n- **Financial Literacy**: Tax compliance guidelines with ZRA; banking services; personal budgeting.",
    createdAt: "2026-06-22T07:15:00Z"
  },
  {
    id: "r-nutrition",
    title: "Food and Nutrition National Syllabus",
    category: "Curriculum Document",
    subject: "Food and Nutrition",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Food Science: Spoilage & Preservation",
    content: "# Food and Nutrition National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Kitchen Safety & Hygiene\n- **Designs**: Plan L-shaped and U-shaped kitchen configurations.\n- **Sterility**: Preventing chemical contamination; administering first aid for burns.\n\n### 2. Food Science & Nutrition\n- **Nutrients**: Chemical absorption of carbohydrates, proteins, and lipids.\n- **Preservation**: Standard dehydration, canning, pasteurisation, and vacuum-packaging.\n\n### 3. Flour Mixtures & Yeast Doughs\n- **Baking Processes**: Roux sauces classification; batter viscosity rules; yeast fermentation kinetics.",
    createdAt: "2026-06-22T07:16:00Z"
  },
  {
    id: "r-geography",
    title: "Geography National Syllabus",
    category: "Curriculum Document",
    subject: "Geography",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Physical Lands: Earth Geomorphology",
    content: "# Geography National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. The Solar System & Earth Movements\n- **Anatomy**: Rotation, Revolution, latitude, longitude, and calculation of timezone variances.\n\n### 2. Basic Map Work & Topography\n- **Contours**: Interpreting contour lines, measuring vertical intervals, gradients, and straight line distances on topographic maps.\n\n### 3. Geomorphology & Economic Geography of Zambia\n- **Tectonics**: Rock classification (sedimentary, metamorphic, igneous); earthquake hazards; and river drainage basin trellis/dendritic systems.\n- **Natural Resources**: Main economic forestry, copper shaft mining, and tourist centers in Zambia.",
    createdAt: "2026-06-22T07:17:00Z"
  },
  {
    id: "r-design-tech",
    title: "Design and Technology National Syllabus",
    category: "Curriculum Document",
    subject: "Design and Technology",
    grade: "Grade 11",
    curriculum: "New Curriculum",
    topic: "Energy, Electricity & Mechanisms",
    content: "# Design and Technology National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Shop Safety & Materials\n- **Guidelines**: Personal protective equipment (PPEs) use; wood grains division (hardwood vs softwood); and board manufacturing styles.\n\n### 2. Engineering & Systems Technology\n- **Circuits**: Constructing parallel and series electrical lamps; symbols of capacitors, transistors, and diodes.\n- **Mechanisms**: Operating first, second, and third-class levers; pulleys and belt drives; chains and sprockets math.\n\n### 3. Graphic Projections & Drawings\n- **CAD blue prints**: Orthographic drawings standard; 3D perspective sketches; and CAD commands.",
    createdAt: "2026-06-22T07:18:00Z"
  },
  {
    id: "r-biology",
    title: "Biology National Syllabus",
    category: "Curriculum Document",
    subject: "Biology",
    grade: "Grade 10",
    curriculum: "New Curriculum",
    topic: "Chemicals of Life",
    content: "# Biology National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Concepts & Principles of Cellular Biology\n- **Scientific Inquiry**: Stages of investigation, hypothesis design, independent vs dependent variables control.\n- **Cells**: Microscope calibration; plant vs animal hybrids structures; staining processes.\n- **Macro-Chemicals**: Chemistry indicators testing for starch, sugars, lipids, and proteins (Biuret and Benedict tests).\n\n### 2. Human & Plant Anatomy\n- **Photosynthesis**: Leaf chloroplast configurations; gaseous exchanges; transpiration tension.\n- **Organ systems**: Circulatory loops; lymph flow; kidney nephron function (ultrafiltration and reabsorption).",
    createdAt: "2026-06-22T07:19:00Z"
  },
  {
    id: "r-literature",
    title: "Literature in English National Syllabus",
    category: "Curriculum Document",
    subject: "Literature in English",
    grade: "Grade 11",
    curriculum: "New Curriculum",
    topic: "Poetry Analysis",
    content: "# Literature in English National Syllabus\n\n## Form 1 - 4 Ordinary Level Secondary Education\n\n### 1. Introduction to Literature\n- **Concepts**: Purpose and five primary functions of literature in society.\n\n### 2. Genres of Literature\n- **Oral**: Folktales, riddles, proverbs, praises, idioms structures and cultural background.\n- **Written Prose**: Narrative elements (plot lines, character types representing flat vs round, contextual theme).\n- **Drama**: Dialogue, acts, scenes, staging directives, tragedy vs comedy traits.\n- **Poetry**: Verses, stanzas, meters, and figurative language (metaphors, similes, personifications).",
    createdAt: "2026-06-22T07:20:00Z"
  }
];

const defaultDiagrams: SavedDiagram[] = [
  {
    id: "d-1",
    name: "Standard Cell Organelles",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="250" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
  <!-- Cytoplasm Outline -->
  <rect x="10" y="10" width="380" height="280" rx="30" fill="#f0fdff" stroke="#0ea5e9" stroke-width="4"/>
  <text x="30" y="40" font-family="system-ui" font-size="14" font-weight="bold" fill="#0369a1">Plant/Animal Hybrid Cell Structure</text>
  
  <!-- Nucleus -->
  <circle cx="150" cy="150" r="45" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
  <circle cx="150" cy="150" r="15" fill="#ca8a04"/>
  <text x="110" y="215" font-family="system-ui" font-size="11" fill="#854d0e">Nucleus (DNA Controller)</text>
  
  <!-- Mitochondria -->
  <ellipse cx="290" cy="90" rx="35" ry="15" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="4" stroke-width="2"/>
  <path d="M 265 90 Q 275 80 290 90 T 315 90" fill="none" stroke="#ef4444" stroke-width="2"/>
  <text x="235" y="125" font-family="system-ui" font-size="11" fill="#991b1b">Mitochondria (Powerhouse)</text>
  
  <!-- Vacuole -->
  <path d="M 50 80 Q 70 60 90 80 T 110 110 T 60 110 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
  <text x="50" y="130" font-family="system-ui" font-size="11" fill="#0369a1">Vacuole (Storage)</text>
</svg>`,
    annotations: [
      "Vacuole: Stores cell sap and helps maintain cell turgidity.",
      "Nucleus: Contains genetic instructions and governs enzyme compilation.",
      "Mitochondria: Generates ATP energy via respiration cycles."
    ],
    createdAt: "2026-06-19T02:00:00Z"
  }
];

const defaultCalendar: CalendarEvent[] = [
  { id: "e-1", title: "Grade 8 Food Web Practical Homework Due", date: "2026-06-22", time: "07:30", type: "SBA Submission", isCompleted: false },
  { id: "e-2", title: "Cell Biology Exam Preparation class", date: "2026-06-24", time: "10:00", type: "Lesson", isCompleted: false },
  { id: "e-3", title: "Term 2 Mid-Grade Coordination Assembly", date: "2026-06-25", time: "14:00", type: "Meeting", isCompleted: true },
  { id: "e-4", title: "Integrated Science Termly Test Day", date: "2026-06-29", time: "08:00", type: "Exam", isCompleted: false },
];

const defaultQuizResults: QuizResult[] = [
  {
    id: "qr-1",
    title: "Ecosystem Dynamics Quiz",
    subject: "Integrated Science",
    grade: "Grade 8",
    topic: "Ecosystems and Environment",
    score: 4,
    totalQuestions: 5,
    percentage: 80,
    date: "2026-06-01"
  },
  {
    id: "qr-2",
    title: "Digestive Systems Anatomy Level check",
    subject: "Biology",
    grade: "Grade 8",
    topic: "The Human Digestive System",
    score: 3,
    totalQuestions: 5,
    percentage: 60,
    date: "2026-06-05"
  },
  {
    id: "qr-3",
    title: "Photosynthesis Flash diagnostic",
    subject: "Biology",
    grade: "Grade 8",
    topic: "The Human Digestive System",
    score: 5,
    totalQuestions: 5,
    percentage: 100,
    date: "2026-06-10"
  },
  {
    id: "qr-4",
    title: "Eco Food Chain Review",
    subject: "Integrated Science",
    grade: "Grade 8",
    topic: "Ecosystems and Environment",
    score: 4,
    totalQuestions: 5,
    percentage: 80,
    date: "2026-06-12"
  },
  {
    id: "qr-5",
    title: "Pathogens & Hygiene Diagnostic",
    subject: "Integrated Science",
    grade: "Grade 8",
    topic: "Ecosystems and Environment",
    score: 2,
    totalQuestions: 5,
    percentage: 40,
    date: "2026-06-15"
  },
  {
    id: "qr-6",
    title: "Enzyme Temperature Kinetics Diagnostic",
    subject: "Biology",
    grade: "Grade 8",
    topic: "The Human Digestive System",
    score: 5,
    totalQuestions: 5,
    percentage: 100,
    date: "2026-06-18"
  },
  {
    id: "qr-7",
    title: "Zambian Crops Selection Quiz",
    subject: "Agricultural Science",
    grade: "Grade 8",
    topic: "Agricultural Crops",
    score: 3,
    totalQuestions: 5,
    percentage: 60,
    date: "2026-06-20"
  }
];

// Helper to retrieve storage or load defaults
function get<T>(key: string, defaults: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaults;
  } catch {
    return defaults;
  }
}

function set<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Local storage set fail", e);
  }
}

export const localDb = {
  getProfile: () => get<TeacherProfile>(KEYS.PROFILE, defaultProfile),
  saveProfile: (p: TeacherProfile) => {
    set(KEYS.PROFILE, p);
    localDb.addPendingChange(`Updated teacher profile: ${p.name}`);
  },

  getSettings: () => get<TeacherSettings>(KEYS.SETTINGS, defaultSettings),
  saveSettings: (s: TeacherSettings) => {
    set(KEYS.SETTINGS, s);
    localDb.addPendingChange(`Updated application settings: Preference to ${s.curriculumPreference}`);
  },

  getLessons: () => get<LessonPlan[]>(KEYS.LESSON_PLANS, defaultLessons),
  saveLessons: (list: LessonPlan[]) => {
    set(KEYS.LESSON_PLANS, list);
    const last = list[list.length - 1];
    const desc = last ? `Lesson: "${last.lessonTitle}" (${last.grade} ${last.subject})` : "Cleared lesson plans";
    localDb.addPendingChange(`Saved: ${desc}`);
  },

  getSchemes: () => get<SchemeOfWork[]>(KEYS.SCHEMES, defaultSchemes),
  saveSchemes: (list: SchemeOfWork[]) => {
    set(KEYS.SCHEMES, list);
    const last = list[list.length - 1];
    const desc = last ? `Terms for ${last.grade} ${last.subject}` : "Cleared termly schemes";
    localDb.addPendingChange(`Saved schedule: ${desc}`);
  },

  getStudents: () => get<Student[]>(KEYS.STUDENTS, defaultStudents),
  saveStudents: (list: Student[]) => {
    set(KEYS.STUDENTS, list);
    localDb.addPendingChange(`Updated class roster: ${list.length} pupils registered`);
  },

  getAssessments: () => get<SBAAssessment[]>(KEYS.ASSESSMENTS, defaultAssessments),
  saveAssessments: (list: SBAAssessment[]) => {
    set(KEYS.ASSESSMENTS, list);
    const last = list[list.length - 1];
    const desc = last ? `Assessment "${last.title}" (${last.type})` : "Cleared assessments template";
    localDb.addPendingChange(`Saved assessment metadata: ${desc}`);
  },

  getMarks: () => get<SBAMark[]>(KEYS.MARKS, defaultMarks),
  saveMarks: (list: SBAMark[]) => {
    set(KEYS.MARKS, list);
    localDb.addPendingChange(`Recorded student grades: ${list.length} mark rows written`);
  },

  getResources: () => {
    const stored = get<TeachingResource[]>(KEYS.RESOURCES, defaultResources);
    const missing = defaultResources.filter(def => !stored.some(st => st.id === def.id));
    if (missing.length > 0) {
      const merged = [...stored, ...missing];
      set(KEYS.RESOURCES, merged);
      return merged;
    }
    return stored;
  },
  saveResources: (list: TeachingResource[]) => {
    set(KEYS.RESOURCES, list);
    const last = list[list.length - 1];
    const desc = last ? `Resource: "${last.title}"` : "Cleared Resources";
    localDb.addPendingChange(`Created local teaching resource: ${desc}`);
  },

  getDiagrams: () => get<SavedDiagram[]>(KEYS.DIAGRAMS, defaultDiagrams),
  saveDiagrams: (list: SavedDiagram[]) => {
    set(KEYS.DIAGRAMS, list);
    const last = list[list.length - 1];
    const desc = last ? `Diagram "${last.name}"` : "Cleared Diagrams";
    localDb.addPendingChange(`Drawn custom diagram: ${desc}`);
  },

  getCalendar: () => get<CalendarEvent[]>(KEYS.CALENDAR, defaultCalendar),
  saveCalendar: (list: CalendarEvent[]) => {
    set(KEYS.CALENDAR, list);
    localDb.addPendingChange(`Saved calendar events: ${list.length} sessions scheduled`);
  },

  getChatSessions: () => get<ChatSession[]>(KEYS.SESSIONS, []),
  saveChatSessions: (list: ChatSession[]) => {
    set(KEYS.SESSIONS, list);
    localDb.addPendingChange("Saved teacher virtual chat history sessions");
  },

  getQuizResults: () => get<QuizResult[]>(KEYS.QUIZ_RESULTS, defaultQuizResults),
  saveQuizResults: (list: QuizResult[]) => {
    set(KEYS.QUIZ_RESULTS, list);
    localDb.addPendingChange(`Recorded quiz stats result: ${list.length} sessions logged`);
  },

  getPendingChanges: () => get<string[]>(KEYS.PENDING_CHANGES, []),
  addPendingChange: (action: string) => {
    // Avoid double logging identical subsequent actions
    const current = get<string[]>(KEYS.PENDING_CHANGES, []);
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedAction = `[${timestamp}] ${action}`;
    if (current.length === 0 || current[current.length - 1] !== formattedAction) {
      set(KEYS.PENDING_CHANGES, [...current, formattedAction]);
    }
  },
  clearPendingChanges: () => {
    set(KEYS.PENDING_CHANGES, []);
  }
};
