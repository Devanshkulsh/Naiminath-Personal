"use client";
import {
  getAllTeachers,
  getTeacherById,
  TeacherDetail,
  TeacherListItem,
} from "@/api/teachers";
import { useEffect, useState } from "react";

export default function Teachers() {
  const [teachers, setTeachers] = useState<TeacherListItem[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherDetail | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingTeacherId, setLoadingTeacherId] = useState<string | null>(null);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [listError, setListError] = useState<string | null>(null);

  useEffect(() => {
    getAllTeachers()
      .then((data) => {
        setTeachers(data);
        setListError(null);
      })
      .catch(() => setListError("Unable to load teachers right now."))
      .finally(() => setIsLoadingList(false));
  }, []);

  const openTeacher = async (id: string) => {
    try {
      setLoadingTeacherId(id);
      const teacher = await getTeacherById(id);
      setSelectedTeacher(teacher);
      setIsModalOpen(Boolean(teacher));
    } finally {
      setLoadingTeacherId(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  const getDepartmentName = (
    department: TeacherListItem["department"] | TeacherDetail["department"]
  ) => {
    if (!department) return "-";
    return (
      department.departmentName || department.name || department.title || "-"
    );
  };

  const getPersonName = (name: unknown) => {
    if (!name) return "-";
    if (typeof name === "string") return name;
    if (typeof name === "object") {
      const n = name as {
        firstName?: string;
        middleName?: string;
        lastName?: string;
      };
      const combined = [n.firstName, n.middleName, n.lastName]
        .filter(Boolean)
        .join(" ")
        .trim();
      if (combined) return combined;
    }
    return "-";
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    const parsed = new Date(dateStr);
    if (Number.isNaN(parsed.getTime())) return dateStr;
    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[rgba(238,241,242,0.9)] to-[rgba(255,255,255,0.95)] px-4 pt-9 pb-10 md:px-6 md:pt-10 md:pb-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto mb-6 max-w-[680px] px-1 text-center md:mb-7">
          <h1 className="roboto-serif-heading lined-heading inline-block text-[34px] leading-tight text-[#101217] md:text-[44px]">
            Faculty
          </h1>
          <p className="mx-auto mt-2 max-w-[560px] text-sm text-[#3d4b60] md:text-base">
            Tap on any faculty card to view full details.
          </p>
        </div>

        {isLoadingList && (
          <div className="mx-auto rounded-[10px] border border-[#d6dde8] bg-white p-[18px] text-[#1f2937]">
            <p>Loading teachers...</p>
          </div>
        )}

        {!isLoadingList && listError && (
          <div className="mx-auto rounded-[10px] border border-[rgba(222,0,0,0.28)] bg-[rgba(255,240,240,0.6)] p-[18px] text-[#8b1c1c]">
            <p>{listError}</p>
          </div>
        )}

        {!isLoadingList && !listError && teachers.length === 0 && (
          <div className="mx-auto rounded-[10px] border border-[#d6dde8] bg-white p-[18px] text-[#1f2937]">
            <p>No teachers found.</p>
          </div>
        )}

        {!isLoadingList && !listError && teachers.length > 0 && (
          <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {teachers.map((teacher) => (
              <div
                key={teacher._id}
                className="group overflow-hidden rounded-2xl border border-[#e0e5eb] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1]">
                  {teacher.teacherPhoto?.asset?.url ? (
                    <img
                      src={teacher.teacherPhoto.asset.url}
                      alt={getPersonName(teacher.fullName)}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--red)] text-4xl font-bold text-white">
                        {getPersonName(teacher.fullName).charAt(0).toUpperCase()}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 min-h-[3rem] text-[17px] font-bold leading-tight text-[#1a1f29]">
                    {getPersonName(teacher.fullName)}
                  </h3>
                  <p className="mb-3 text-sm text-[#5a6c7d]">
                    <div>
                      Department
                    </div>
                    <span className="font-medium">{getDepartmentName(teacher.department)}</span>
                  </p>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-[var(--red)] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b91c1c] active:scale-[0.98]"
                    onClick={() => openTeacher(teacher._id)}
                    disabled={loadingTeacherId === teacher._id}
                  >
                    {loadingTeacherId === teacher._id ? "Loading..." : "View More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {isModalOpen && selectedTeacher && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow-lg transition hover:bg-gray-100"
                onClick={closeModal}
              >
                ✕
              </button>

              <div className="max-h-[92vh] overflow-y-auto">
                {selectedTeacher.teacherPhoto?.asset?.url ? (
                  <div className="relative h-[280px] w-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={selectedTeacher.teacherPhoto.asset.url}
                      alt={getPersonName(selectedTeacher.fullName)}
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 pt-20">
                      <h2 className="text-3xl font-bold text-white">
                        {getPersonName(selectedTeacher.fullName)}
                      </h2>
                      <p className="mt-1 text-lg text-white/90">{getDepartmentName(selectedTeacher.department)}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[var(--red)] to-red-700 p-8">
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-4xl font-bold text-white backdrop-blur-sm">
                        {getPersonName(selectedTeacher.fullName).charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          {getPersonName(selectedTeacher.fullName)}
                        </h2>
                        <p className="mt-1 text-lg text-white/90">{getDepartmentName(selectedTeacher.department)}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
                      <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-700">
                        <span className="text-[var(--red)]">●</span> Basic Information
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Teacher Code</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.teacherCode || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Father Name</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{getPersonName(selectedTeacher.fatherName)}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Date of Birth</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.dob || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Nature of Appointment</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.natureOfPresentAppointment || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-5">
                      <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-700">
                        <span className="text-blue-600">●</span> Qualifications
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">UG Qualification</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">
                            {selectedTeacher.ugQualification
                              ? `${selectedTeacher.ugQualification.university || "-"} (${selectedTeacher.ugQualification.year || "-"})`
                              : "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">PG Qualification</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">
                            {selectedTeacher.pgQualification
                              ? `${selectedTeacher.pgQualification.subject || "-"}, ${selectedTeacher.pgQualification.university || "-"} (${selectedTeacher.pgQualification.year || "-"})`
                              : "-"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-5">
                      <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-700">
                        <span className="text-green-600">●</span> Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Local Address</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.localResidentialAddress || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Permanent Address</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.permanentAddress || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-white p-5">
                      <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-700">
                        <span className="text-purple-600">●</span> Registration Details
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">State Board</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.stateBoardRegistration?.boardName || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Registration Number</p>
                          <p className="mt-1.5 text-base font-semibold text-gray-900">{selectedTeacher.stateBoardRegistration?.registrationNumber || "-"}</p>
                        </div>
                      </div>
                    </div>

                    {Array.isArray(selectedTeacher.experience) && selectedTeacher.experience.length > 0 && (
                      <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-5">
                        <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-700">
                          <span className="text-orange-600">●</span> Experience
                        </h3>
                        <div className="space-y-3">
                          {selectedTeacher.experience.map((exp, index: number) => (
                            <div key={exp._key || index} className="rounded-lg border-l-4 border-[var(--red)] bg-white p-4 shadow-sm">
                              <p className="text-base font-bold text-gray-900">{exp.designation || "-"}</p>
                              <p className="mt-1 text-sm text-gray-600">{exp.collegeName || "-"}</p>
                              <p className="mt-2 text-xs font-medium text-gray-500">
                                {exp.durationType === "single"
                                  ? `Date: ${exp.singleDate || "-"}`
                                  : `${formatDate(exp.fromDate)} - ${formatDate(exp.toDate)}`}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
