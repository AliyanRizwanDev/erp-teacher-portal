import { Attendance } from "../pages/attendance";
import { Complaints } from "../pages/complaints";
import Dashboard from "../pages/dashboard";
import { LeaveApplications } from "../pages/leave-applications";
import { LoanApplication } from "../pages/loan-applications";
import { Suggestions } from "../pages/suggestions";
import { ROUTES, TIMETABLE_ROUTES } from "./routes";
import { Results } from "../pages/results";
import { Nominal } from "../pages/nominal";
import { StudentAttendance } from "../pages/student-attendance";
import { TimeTable } from "../pages/timetable";
import { StudentAttendanceTimeTable } from "../pages/timetable/student-attendance";
import { CourseCoverage } from "../pages/timetable/course-coverage";
import { TestMarks } from "../pages/timetable/test-marks";
import { TestReturn } from "../pages/timetable/test-return";
import { NominalRoll } from "../pages/timetable/nominal-roll";
import { AttendanceReport } from "../pages/timetable/attendance-report";
import { ChangePassword } from "../pages/change-password";
import { Profile } from "../pages/profile";
import Notifications from "../pages/notifications";
import NotFound from "@/pages/404";

export const pageRoutes = [
  { path: ROUTES.DASHBOARD, element: <Dashboard /> },
  { path: ROUTES.CHANGE_PASSWORD, element: <ChangePassword /> },
  { path: ROUTES.PROFILE, element: <Profile /> },
  { path: ROUTES.NOTIFICATIONS, element: <Notifications /> },
  { path: ROUTES.LEAVE_APPLICATIONS, element: <LeaveApplications /> },
  { path: ROUTES.LOAN_APPLICATION, element: <LoanApplication /> },
  { path: ROUTES.COMPLAINT, element: <Complaints /> },
  { path: ROUTES.SUGGESTION, element: <Suggestions /> },
  { path: ROUTES.ATTENDANCE, element: <Attendance /> },
  { path: ROUTES.RESULTS, element: <Results /> },
  { path: ROUTES.NOMINAL_ROLL, element: <Nominal /> },
  { path: ROUTES.STUDENT_ATTENDANCE, element: <StudentAttendance /> },
  { path: ROUTES.TIMETABLE, element: <TimeTable /> },
  {
    path: ROUTES.NOT_FOUND_PAGE,
    element: <NotFound />,
  },
  {
    path: TIMETABLE_ROUTES.STUDENT_ATTENDANCE,
    element: <StudentAttendanceTimeTable />,
  },
  { path: TIMETABLE_ROUTES.COURSE_COVERAGE, element: <CourseCoverage /> },
  { path: TIMETABLE_ROUTES.TEST_MARKS, element: <TestMarks /> },
  { path: TIMETABLE_ROUTES.TEST_RETURN, element: <TestReturn /> },
  { path: TIMETABLE_ROUTES.NOMINAL_ROLL, element: <NominalRoll /> },
  { path: TIMETABLE_ROUTES.ATTENDANCE_REPORT, element: <AttendanceReport /> },
];
