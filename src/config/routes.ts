export class ROUTES {
  static HOME = "/";
  static DASHBOARD = "/dashboard";
  static REQUISITIONS = "/requisitions";
  static COMPLAINT = "/complaint";
  static SUGGESTION = "/suggestion";
  static PERFORMANCE = "/performance";
  static STUDENT_ATTENDANCE = "/student-attendance";
  static TIMETABLE = "/timetable";
  static RESULTS = "/results";
  static NOMINAL_ROLL = "/nominal-roll";
  static ATTENDANCE = "/attendance";
  static CHANGE_PASSWORD = "/change-password";
  static LEAVE_APPLICATIONS = `${this.REQUISITIONS}/leave-applications`;
  static LOAN_APPLICATION = `${this.REQUISITIONS}/loan-applications`;
  static PROFILE = "/profile";
  static NOTIFICATIONS = "/notifications";
  static NOT_FOUND_PAGE = "*";
}

export class TIMETABLE_ROUTES {
  static STUDENT_ATTENDANCE = `${ROUTES.TIMETABLE}/student-attendance`;
  static COURSE_COVERAGE = `${ROUTES.TIMETABLE}/course-coverage`;
  static TEST_MARKS = `${ROUTES.TIMETABLE}/test-marks`;
  static TEST_RETURN = `${ROUTES.TIMETABLE}/test-return`;
  static REPORTS = `${ROUTES.TIMETABLE}/reports`;
  static NOMINAL_ROLL = `${ROUTES.TIMETABLE}/nominal-roll`;
  static ATTENDANCE_REPORT = `${ROUTES.TIMETABLE}/attendance-report`;
}
