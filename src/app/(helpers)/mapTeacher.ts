import type { Teacher } from "@/types/teacher"

export function mapRowToTeacher(row: string[]): Teacher {
  return {
    surname: row[0] ?? "",
    firstName: row[1] ?? "",
    middleName: row[2] ?? "",
    fatherName: row[3] ?? "",
    dateOfBirth: row[4] ?? "",
    teacherCode: row[5] ?? "",
    ugQualification: row[6] ?? "",
    pgQualification: row[7] ?? "",
    experienceDuration: row[8] ?? "",
    designation: row[9] ?? "",
    collegeName: row[10] ?? "",
    department: row[11] ?? "",
    appointmentNature: row[12] ?? "",
    stateBoardRegistration: row[13] ?? "",
    photo: row[14] ?? "",
  };
}
