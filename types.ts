/**
 * Data Types and Models for TeacherDesk AI
 */

export interface TeacherProfile {
  name: string;
  nrcId: string;
  school: string;
  province: string;
  subjects: string[];
  grades: string[];
  phoneNumber: string;
  email: string;
}

export type CurriculumType = "Old Curriculum" | "New Curriculum";

export interface CurriculumSubject {
  id: string;
  name: string;
  grades: string[];
  topics: {
    grade: string;
    topicName: string;
    subtopics: string[];
    competencies: string[];
    outcomes: string[];
  }[];
}

export interface LessonPlan {
  id: string;
  subject: string;
  grade: string;
  topic: string;
  subtopic: string;
  curriculumVersion: CurriculumType;
  duration: string;
  lessonTitle: string;
  competencies: string;
  learningOutcomes: string;
  objectives: string;
  introduction: string;
  teacherActivities: string;
  learnerActivities: string;
  teachingMaterials: string;
  assessment: string;
  reflection: string;
  homework: string;
  createdAt: string;
}

export interface SchemeWeek {
  weekNo: number;
  topic: string;
  subtopic: string;
  competencies: string;
  learningOutcomes: string;
  teachingResources: string;
  assessmentMethods: string;
}

export interface SchemeOfWork {
  id: string;
  subject: string;
  grade: string;
  term: string; // "Term 1" | "Term 2" | "Term 3"
  curriculumVersion: CurriculumType;
  weeks: SchemeWeek[];
  createdAt: string;
}

// School-Based Assessment (SBA) types
export type SBAType = "Test" | "Assignment" | "Project" | "Practical Work" | "Oral Work" | "Homework";

export interface Student {
  id: string;
  name: string;
  nrcOrId?: string;
  rollNo: string;
}

export interface SBAAssessment {
  id: string;
  title: string;
  type: SBAType;
  date: string;
  maxMarks: number;
  weightPercent?: number; // e.g. 20%
  competencyTargeted: string; // SBA competence focus
  subject?: string; // e.g. "Science", "Mathematics"
}

export interface SBAMark {
  studentId: string;
  assessmentId: string;
  score: number;
  competencyAchieved: boolean;
  feedback: string;
}

// Teaching Resources Hub
export interface TeachingResource {
  id: string;
  title: string;
  category: "Notes" | "Worksheet" | "Exam" | "Assignment" | "Curriculum Document" | "Other";
  subject: string;
  grade: string;
  curriculum: CurriculumType;
  topic: string;
  content: string; // The text content or link reference
  createdAt: string;
}

// Diagram Engine
export interface SavedDiagram {
  id: string;
  name: string;
  svgContent: string;
  annotations: string[];
  createdAt: string;
}

// Chat Messages
export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  attachments?: {
    name: string;
    mimeType: string;
    data: string; // base64 string
  }[];
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  messages: ChatMessage[];
}

// Planner Types
export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM
  type: "Lesson" | "Exam" | "SBA Submission" | "Meeting" | "Other";
  isCompleted: boolean;
  reminderSent?: boolean;
}

// App Settings
export interface TeacherSettings {
  theme: "light" | "dark" | "education-blue";
  language: string; // "English" | "Bemba" | "Nyanja" | "Tonga" | "Lozi"
  curriculumPreference: CurriculumType;
  schoolTerm: string;
  syncWithSupabase: boolean;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

export interface QuizResult {
  id: string;
  title: string;
  subject: string;
  grade: string;
  topic: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
}
