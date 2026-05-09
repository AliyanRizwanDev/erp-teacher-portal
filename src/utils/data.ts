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
  { value: "Head Office", label: "Head Office" },
  {
    value: "HQ (Corporate Office)",
    label: "HQ (Corporate Office)",
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
  { value: "Head Office", label: "Head Office" },
  {
    value: "Evening Coaching/Entry Test",
    label: "Evening Coaching/Entry Test",
  },
  { value: "Colleges", label: "Colleges" },
  { value: "Schools", label: "Schools" },
  { value: "7Cs Schools", label: "7Cs Schools" },
  { value: "Virtual Campus", label: "Virtual Campus" },
  { value: "Foreign Test", label: "Foreign Test" },
  {
    value: "Evening Coaching (Franchise)",
    label: "Evening Coaching (Franchise)",
  },
];

export const CampusDropdownOptions = [
  { value: "HQ (Corporate Office)", label: "HQ (Corporate Office)" },
  { value: "Campus_01 (Main Office)", label: "Campus_01 (Main Office)" },
  { value: "Campus_02 (Secondary)", label: "Campus_02 (Secondary)" },
  { value: "Campus_03 (Tertiary)", label: "Campus_03 (Tertiary)" },
  { value: "Campus_04 (Quaternary)", label: "Campus_04 (Quaternary)" },
  { value: "Campus_05 (Storage)", label: "Campus_05 (Storage)" },
  { value: "Campus_06 (Studios)", label: "Campus_06 (Studios)" },
  { value: "Campus_07 (Operations)", label: "Campus_07 (Operations)" },
  { value: "Virtual_Campus_01 (Main)", label: "Virtual_Campus_01 (Main)" },
];

export const topicOptions = [
  {
    value:
      "(1-Basic Concepts) Introduction to Board Pattern, Marks Distribution & how to study Chemistry, Introduction to Basic Concepts",
    label:
      "(1-Basic Concepts) Introduction to Board Pattern, Marks Distribution & how to study Chemistry, Introduction to Basic Concepts",
  },
  {
    value: "(1-Basic Concepts) Molar volume, example-10",
    label: "(1-Basic Concepts) Molar volume, example-10",
  },
  {
    value: "(1-Basic Concepts) Stoichiometry and example-11+12",
    label: "(1-Basic Concepts) Stoichiometry and example-11+12",
  },
  {
    value: "(1-Basic Concepts) Limiting reactant",
    label: "(1-Basic Concepts) Limiting reactant",
  },
  {
    value: "(1-Basic Concepts) Identification of limiting reactant",
    label: "(1-Basic Concepts) Identification of limiting reactant",
  },
  {
    value: "(1-Basic Concepts) example-13",
    label: "(1-Basic Concepts) example-13",
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
