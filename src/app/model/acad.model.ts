export interface Academic {
  classid:             number;
  program:             string;
  acadyear:            string;
  semester:            string;
  campusid:            number;
  campusname:          string;
  levelid:             number;
  levelname:           string;
  courseid:            number;
  coursecode:          string;
  revisioncode:        string;
  coursename:          string;
  coursenameeng:       string;
  sectioncode:         string;
  totalseat:           number;
  enrollseat:          number;
  classstatus:         ClassStatus;
  classstatusdes:      string;
  classset:            ClassSet;
  classsetdes:         string;
  classnote:           string;
  classinstructorname: string;
  classtime:           string;
  classexam:           string;
  courseunit:          string;
  instructor:          string;
}

export enum ClassSet {
  A = "A",
}

export enum ClassStatus {
  W = "W",
}
