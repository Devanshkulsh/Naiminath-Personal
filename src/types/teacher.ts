export type Teacher = {
  // Name
  surname: string;
  firstName: string;
  middleName: string;

  // Personal details
  fatherName: string;
  dateOfBirth: string; // keep as string (from sheet)

  // Identification
  teacherCode: string;

  // Qualifications
  ugQualification: string; // University & year
  pgQualification: string; // University & year

  // Experience (can be expanded later)
  experienceDuration: string; // dd/mm/yyyy or range
  designation: string;
  collegeName: string;

  // Professional
  department: string;
  appointmentNature: string; 
  // regular / contractual / deputation / part-time / adhoc

  // Registration
  stateBoardRegistration: string;

  // Media
  photo: string; // URL
};
