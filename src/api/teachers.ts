import sanityClient from "../lib/sanityClient";

type PersonName =
  | string
  | {
      _type?: string;
      firstName?: string;
      middleName?: string;
      lastName?: string;
    };

export type TeacherListItem = {
  _id: string;
  fullName?: PersonName;
  teacherCode?: string;
  department?: {
    _id?: string;
    name?: string;
    title?: string;
    departmentName?: string;
  } | null;
  teacherPhoto?: {
    asset?: {
      url?: string;
    };
  };
};

export type TeacherDetail = TeacherListItem & {
  fatherName?: PersonName;
  dob?: string;
  ugQualification?: {
    university?: string;
    year?: number;
  };
  pgQualification?: {
    subject?: string;
    university?: string;
    year?: number;
  };
  experience?: Array<{
    _key?: string;
    durationType?: string;
    fromDate?: string;
    toDate?: string;
    singleDate?: string;
    designation?: string;
    collegeName?: string;
  }>;
  natureOfPresentAppointment?: string;
  localResidentialAddress?: string;
  permanentAddress?: string;
  stateBoardRegistration?: {
    boardName?: string;
    registrationNumber?: string;
  };
  teacherPhoto?: {
    caption?: string;
    asset?: {
      url?: string;
    };
  };
  [key: string]: unknown;
};

export async function getAllTeachers() {
  const query = `*[_type == "teacher"]{
    _id,
    fullName,
    teacherCode,
    teacherPhoto{
      asset->{
        url
      }
    },
    department->{
      _id,
      name,
      title,
      departmentName
    }
  } | order(fullName.firstName asc)`;

  return await sanityClient.fetch<TeacherListItem[]>(query);
}

export async function getTeacherById(id: string) {
  const query = `*[_type == "teacher" && _id == $id][0]{
    _id,
    fullName,
    fatherName,
    dob,
    teacherCode,
    ugQualification,
    pgQualification,
    experience[]{
      _key,
      durationType,
      fromDate,
      toDate,
      singleDate,
      designation,
      collegeName
    },
    department->{
      _id,
      name,
      title,
      departmentName
    },
    natureOfPresentAppointment,
    localResidentialAddress,
    permanentAddress,
    stateBoardRegistration,
    teacherPhoto{
      caption,
      asset->{
        url
      }
    }
  }`;

  return await sanityClient.fetch<TeacherDetail | null>(query, { id });
}
