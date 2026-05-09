import { toast } from "@/hooks/use-toast";
import { ROUTES, TIMETABLE_ROUTES } from "../config/routes";

export const sideBarData = [
  {
    text: "Dashboard",
    src: "/images/category.svg",
    path: ROUTES.DASHBOARD,
    isImage: true,
    children: [
      {
        text: "Timetable",
        path: ROUTES.TIMETABLE,
        isImage: false,
      },
      {
        text: "My Attendance",
        path: ROUTES.ATTENDANCE,
        isImage: false,
      },
      {
        text: "Student Attendance",
        path: ROUTES.STUDENT_ATTENDANCE,
        isImage: false,
      },
      {
        text: "Student Results",
        path: ROUTES.RESULTS,
        isImage: false,
      },
      {
        text: "Nominal Roll",
        path: ROUTES.NOMINAL_ROLL,
        isImage: false,
      },
    ],
  },
  {
    text: "Requisitions",
    src: "/images/requisitions.svg",
    path: "", // Empty path to disable navigation
    isImage: true,
    children: [
      {
        text: "Leave",
        path: ROUTES.LEAVE_APPLICATIONS,
        isImage: false,
      },
      {
        text: "Loan",
        path: ROUTES.LOAN_APPLICATION,
        isImage: false,
      },
    ],
  },
  {
    text: "Complaint",
    src: "/images/results.svg",
    path: ROUTES.COMPLAINT,
    isImage: true,
  },
  {
    text: "Suggestion",
    src: "/images/lms.svg",
    path: ROUTES.SUGGESTION,
    isImage: true,
  },
];

export const timeTableSideBarData = [
  {
    text: "Student Attendance",
    src: "/images/video-time.svg",
    path: TIMETABLE_ROUTES.STUDENT_ATTENDANCE,
    isImage: true,
  },
  {
    text: "Course Coverage",
    src: "/images/results.svg",
    path: TIMETABLE_ROUTES.COURSE_COVERAGE,
    isImage: true,
  },

  {
    text: "Test Marks",
    src: "/images/note.svg",
    path: TIMETABLE_ROUTES.TEST_MARKS,
    isImage: true,
  },

  {
    text: "Test Return",
    src: "/images/document-text.svg",
    path: TIMETABLE_ROUTES.TEST_RETURN,
    isImage: true,
  },
  {
    text: "Reports",
    src: "/images/requisitions.svg",
    path: TIMETABLE_ROUTES.REPORTS,
    isImage: true,
    children: [
      {
        text: "Nominal Roll",
        path: TIMETABLE_ROUTES.NOMINAL_ROLL,
        isImage: false,
      },
      {
        text: "Attendance Report",
        path: TIMETABLE_ROUTES.ATTENDANCE_REPORT,
        isImage: false,
      },
    ],
  },
];

export const loginDropdownOptions = [
  { value: "Main Office", label: "Main Office" },
  {
    value: "Regional Office",
    label: "Regional Office",
  },
];

export const programDropdownOptions = [
  { value: "Intermediate", label: "Intermediate" },
  { value: "BS Programs", label: "BS Programs" },
  { value: "ADP", label: "ADP" },
];

export const disciplineDropdownOptions = [
  { value: "FSc (Pre-Med)", label: "FSc (Pre-Med)" },
  { value: "FSc (Pre-Engg)", label: "FSc (Pre-Engg)" },
  { value: "I.C.S (PHY)", label: "I.C.S (PHY)" },
  { value: "I.C.S (STAT)", label: "I.C.S (STAT)" },
  { value: "I.C.S (ECO)", label: "I.C.S (ECO)" },
  { value: "I.C.S Business", label: "I.C.S Business" },
  { value: "I.Com.", label: "I.Com." },
  { value: "I.Com. Business", label: "I.Com. Business" },
  { value: "F.A.", label: "F.A." },
];

export const sectionDropdownOptions = [
  { value: "RMB1 (4/75)", label: "RMB1 (4/75)" },
];

export const ProjectDropdownOptions = [
  { value: "Main Office", label: "Main Office" },
  {
    value: "Development Division",
    label: "Development Division",
  },
  { value: "College Programs", label: "College Programs" },
  { value: "School Programs", label: "School Programs" },
  { value: "Training Programs", label: "Training Programs" },
  { value: "Online Programs", label: "Online Programs" },
  { value: "International Programs", label: "International Programs" },
  {
    value: "Partner Locations",
    label: "Partner Locations",
  },
];

export const CampusDropdownOptions = [
  { value: "Central Campus", label: "Central Campus" },
  { value: "North Campus", label: "North Campus" },
  { value: "South Campus", label: "South Campus" },
  { value: "East Campus", label: "East Campus" },
  { value: "West Campus", label: "West Campus" },
  { value: "Administrative Hub", label: "Administrative Hub" },
  { value: "Learning Center", label: "Learning Center" },
  { value: "Student Services", label: "Student Services" },
  { value: "Remote Campus", label: "Remote Campus" },
];

export const topicOptions = [
  {
    value: "(1-Module 1) Course Introduction & Learning Objectives",
    label: "(1-Module 1) Course Introduction & Learning Objectives",
  },
  {
    value: "(2-Module 2) Fundamental Concepts - Unit 1",
    label: "(2-Module 2) Fundamental Concepts - Unit 1",
  },
  {
    value: "(3-Module 3) Core Principles - Topic A",
    label: "(3-Module 3) Core Principles - Topic A",
  },
  {
    value: "(4-Module 4) Advanced Concepts - Topic B",
    label: "(4-Module 4) Advanced Concepts - Topic B",
  },
  {
    value: "(5-Module 5) Practical Applications",
    label: "(5-Module 5) Practical Applications",
  },
  {
    value: "(6-Module 6) Case Studies & Examples",
    label: "(6-Module 6) Case Studies & Examples",
  },
  {
    value: "(1-Basic Concepts) Yield",
    label: "(1-Basic Concepts) Yield",
  },
  {
    value:
      "(1-Basic Concepts) Introduction to Board Pattern, Marks Distribution & how to study Chemistry, Introduction to Basic Concepts",
    label:
      "(1-Basic Concepts) Introduction to Board Pattern, Marks Distribution & how to study Chemistry, Introduction to Basic Concepts",
  },
  {
    value: "(1-Basic Concepts) Atom, Evidence of atoms",
    label: "(1-Basic Concepts) Atom, Evidence of atoms",
  },
];
export const TypeDropDownOptions = [
  { value: "Lecture", label: "Lecture" },
  { value: "Test", label: "Test" },
  { value: "Discussion", label: "Discussion" },
  { value: "Practical", label: "Practical" },
];
export const TestTypeDropDownOptions = [
  { value: "CH-WISE", label: "CH-WISE" },
  { value: "SEND-UP", label: "SEND-UP" },
  { value: "SLP", label: "SLP" },
  { value: "FLP", label: "FLP" },
  { value: "OBJECTIVE", label: "OBJECTIVE" },
  { value: "MOCK", label: "MOCK" },
  { value: "GRAND", label: "GRAND" },
];

export const TestTypeNumberDropDownOptions = [
  { value: "T-1", label: "T-1" },
  { value: "T-2", label: "T-2" },
  { value: "T-3", label: "T-3" },
  { value: "T-4", label: "T-4" },
  { value: "T-5", label: "T-5" },
  { value: "T-6", label: "T-6" },
];

export const LeaveTypeDropDownOptions = [
  { value: "Sick Leave", label: "Sick Leave" },
  { value: "Casual Leave", label: "Casual Leave" },
  { value: "Maternity Leave", label: "Maternity Leave" },
  { value: "Bereavement Leave", label: "Bereavement Leave" },
  { value: "Unpaid Leave", label: "Unpaid Leave" },
];

export const LoanTypeDropDownOptions = [
  { value: "Personal Loan", label: "Personal Loan" },
  { value: "Medical Loan", label: "Medical Loan" },
  { value: "Study Loan", label: "Study Loan" },
  { value: "Home Loan", label: "Home Loan" },
  { value: "Family Loan", label: "Family Loan" },
];

export const ComplaintTypeDropDownOptions = [
  { value: "Personal Complaint", label: "Personal Complaint" },
  { value: "Administrative Complaint", label: "Administrative Complaint" },
  { value: "Academic Complaint", label: "Academic Complaint" },
];

export const SuggestionTypeDropDownOptions = [
  { value: "Campus Suggestion", label: "Campus Suggestion" },
  { value: "Administrative Suggestion", label: "Administrative Suggestion" },
  { value: "Academic Suggestion", label: "Academic Suggestion" },
];

export const dashboardCards = [
  {
    image: "/images/video-time.svg",
    title: "Timetable",
    navLink: ROUTES.TIMETABLE,
  },
  {
    image: "/images/requisitions.svg",
    title: "My Attendance",
    navLink: ROUTES.ATTENDANCE,
  },
  {
    image: "/images/category.svg",
    title: "My Performance",
    navLink: ROUTES.DASHBOARD,
    onclick: () =>
      toast({
        title: "Feature Coming Soon",
        description: "This feature is currently under development!",
      }),
  },
  {
    image: "/images/note.svg",
    title: "Student Attendance Report",
    navLink: ROUTES.STUDENT_ATTENDANCE,
  },
  {
    image: "/images/results.svg",
    title: "Student Results",
    navLink: ROUTES.RESULTS,
  },
  {
    image: "/images/document-text.svg",
    title: "Nominal Roll",
    navLink: ROUTES.NOMINAL_ROLL,
  },
];
