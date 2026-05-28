"use client";
import {
  getAllTeachers,
  getTeacherById,
  TeacherDetail,
  TeacherListItem,
} from "@/api/teachers";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/app/context/store";

export default function Teachers() {
  const { setImageSlide } = useGlobalContext();
  const [teachers, setTeachers] = useState<TeacherListItem[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherDetail | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingTeacherId, setLoadingTeacherId] = useState<string | null>(null);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const departmentTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    setImageSlide(false);
  }, [setImageSlide]);

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

  const groupedTeachers = teachers.reduce<
    Array<{ department: string; faculty: TeacherListItem[] }>
  >((groups, teacher) => {
    const department = getDepartmentName(teacher.department);
    const existingGroup = groups.find((group) => group.department === department);

    if (existingGroup) {
      existingGroup.faculty.push(teacher);
    } else {
      groups.push({ department, faculty: [teacher] });
    }

    return groups;
  }, []);

  const departmentTabs = ["All", ...groupedTeachers.map((group) => group.department)];
  const visibleTeachers =
    activeDepartment === "All"
      ? teachers
      : groupedTeachers.find((group) => group.department === activeDepartment)
          ?.faculty || [];
  const teachersPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(visibleTeachers.length / teachersPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const firstVisibleTeacher = (safeCurrentPage - 1) * teachersPerPage;
  const paginatedTeachers = visibleTeachers.slice(
    firstVisibleTeacher,
    firstVisibleTeacher + teachersPerPage
  );

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 px-3 py-10 sm:px-4 sm:py-14 md:px-6 md:py-20">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
            Meet Our Team
          </div>
          <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Our Faculty
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:mt-6">
            Dedicated educators committed to excellence in teaching and shaping future healthcare professionals
          </p>
        </div>

        {isLoadingList && (
          <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white/80 p-12 backdrop-blur-sm">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>
              <p className="text-gray-600">Loading faculty members...</p>
            </div>
          </div>
        )}

        {!isLoadingList && listError && (
          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="font-semibold text-red-700">{listError}</p>
          </div>
        )}

        {!isLoadingList && !listError && teachers.length > 0 && (
          <div className="grid min-w-0 gap-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-6">
            <aside className="min-w-0 h-fit rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
              <p className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                Departments
              </p>
              <div className="flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {departmentTabs.map((department) => (
                  <button
                    key={department}
                    type="button"
                    ref={(element) => {
                      departmentTabRefs.current[department] = element;
                    }}
                    onClick={() => {
                      setActiveDepartment(department);
                      setCurrentPage(1);
                      departmentTabRefs.current[department]?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }}
                    className={`whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all sm:px-4 sm:py-3 ${
                      activeDepartment === department
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                        : "bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >
                    {department}
                  </button>
                ))}
              </div>
            </aside>

            <div className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 bg-gray-50 px-4 py-4 sm:px-5">
                <p className="text-sm font-bold uppercase tracking-wide text-red-700">
                  {activeDepartment === "All" ? "All Departments" : activeDepartment}
                </p>
              </div>
              <div className="max-w-full overflow-x-auto overscroll-x-contain">
                <table className="min-w-[680px] text-left sm:min-w-[760px]">
                  <thead className="bg-white text-xs font-bold uppercase tracking-wide text-gray-500">
                    <tr>
                      <th className="px-5 py-4">Image</th>
                      <th className="px-5 py-4">Faculty Name</th>
                      <th className="px-5 py-4">Teacher Code</th>
                      <th className="px-5 py-4">Department</th>
                      <th className="px-5 py-4 text-right">Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {paginatedTeachers.map((teacher) => (
                      <tr
                        key={teacher._id}
                        className="transition-colors hover:bg-red-50/40"
                      >
                        <td className="px-5 py-4">
                          {teacher.teacherPhoto?.asset?.url ? (
                            <img
                              src={teacher.teacherPhoto.asset.url}
                              alt={getPersonName(teacher.fullName)}
                              className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-200"
                            />
                          ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-2xl font-bold text-white">
                              {getPersonName(teacher.fullName).charAt(0)}
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <p className="font-bold text-gray-900">
                            {getPersonName(teacher.fullName)}
                          </p>
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                          {teacher.teacherCode || "-"}
                        </td>
                        <td className="px-5 py-4 text-sm text-gray-700">
                          {getDepartmentName(teacher.department)}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => openTeacher(teacher._id)}
                            disabled={loadingTeacherId === teacher._id}
                            className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                          >
                            {loadingTeacherId === teacher._id
                              ? "Loading..."
                              : "View Profile →"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-3 border-t border-gray-200 bg-gray-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <p className="text-center text-sm font-medium text-gray-600 sm:text-left">
                  Showing {visibleTeachers.length === 0 ? 0 : firstVisibleTeacher + 1}
                  {" - "}
                  {Math.min(firstVisibleTeacher + teachersPerPage, visibleTeachers.length)}
                  {" of "}
                  {visibleTeachers.length} faculty
                </p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={safeCurrentPage === 1}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-45 sm:px-4"
                  >
                    Previous
                  </button>
                  <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-gray-700 ring-1 ring-gray-200 sm:px-4">
                    {safeCurrentPage} / {totalPages}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) => Math.min(totalPages, page + 1))
                    }
                    disabled={safeCurrentPage === totalPages}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-45 sm:px-4"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isModalOpen && selectedTeacher && (
          <div
            className="fixed inset-0 z-[1000] flex items-stretch justify-center bg-slate-950/75 p-0 backdrop-blur-md sm:items-center sm:p-4"
            onClick={closeModal}
          >
            <div
              className="relative h-[100dvh] w-full max-w-5xl overflow-hidden rounded-none bg-white shadow-[0_28px_90px_rgba(15,23,42,0.35)] ring-1 ring-white/20 sm:h-auto sm:max-h-[95vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-700 shadow-xl ring-1 ring-black/5 transition-all hover:bg-red-50 hover:text-red-700 sm:right-5 sm:top-5 sm:h-11 sm:w-11 sm:text-xl"
                onClick={closeModal}
              >
                <span className="text-2xl">×</span>
              </button>

              <div className="h-[100dvh] overflow-y-auto sm:h-auto sm:max-h-[95vh]">
                <div className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-slate-900 px-4 pb-8 pt-14 text-white sm:px-6 sm:py-10 md:px-10 md:py-12">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6 md:flex-row md:text-left">
                    {selectedTeacher.teacherPhoto?.asset?.url ? (
                      <img
                        src={selectedTeacher.teacherPhoto.asset.url}
                        alt={getPersonName(selectedTeacher.fullName)}
                        className="h-28 w-28 flex-shrink-0 rounded-2xl border-4 border-white object-cover shadow-2xl ring-4 ring-white/20 sm:h-36 sm:w-36 md:h-44 md:w-44"
                      />
                    ) : (
                      <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-white/10 text-5xl font-bold shadow-2xl backdrop-blur-sm ring-4 ring-white/20 sm:h-36 sm:w-36 sm:text-6xl md:h-44 md:w-44">
                        {getPersonName(selectedTeacher.fullName).charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0 max-w-full">
                      <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 ring-1 ring-white/20 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                        Faculty Profile
                      </p>
                      <h2 className="break-words text-2xl font-extrabold leading-tight sm:text-3xl md:text-5xl">
                        {getPersonName(selectedTeacher.fullName)}
                      </h2>
                      <p className="mt-3 break-words text-sm font-semibold text-white/90 sm:text-base md:text-lg">
                        {getDepartmentName(selectedTeacher.department)}
                      </p>
                      <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                        <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-red-700 shadow-sm sm:px-4 sm:text-sm">
                          Code: {selectedTeacher.teacherCode || "-"}
                        </span>
                        <span className="max-w-full rounded-full bg-white/15 px-3 py-2 text-xs font-bold text-white ring-1 ring-white/20 sm:px-4 sm:text-sm">
                          {selectedTeacher.natureOfPresentAppointment || "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 bg-gradient-to-b from-slate-50 to-white p-3 sm:p-5 md:space-y-6 md:p-8">
                
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.07)] md:p-6">
                    <div className="mb-4 flex items-center gap-3 md:mb-5">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg sm:h-10 sm:w-10">
                        <span className="text-lg">💼</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Professional Information</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Faculty Code</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.teacherCode || "-"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Nature of Appointment</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.natureOfPresentAppointment || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.07)] md:p-6">
                    <div className="mb-4 flex items-center gap-3 md:mb-5">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg sm:h-10 sm:w-10">
                        <span className="text-lg">📋</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Registration Details</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Board Name</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.stateBoardRegistration?.boardName || "-"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Registration Number</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.stateBoardRegistration?.registrationNumber || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.07)] md:p-6">
                    <div className="mb-4 flex items-center gap-3 md:mb-5">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg sm:h-10 sm:w-10">
                        <span className="text-lg">🎓</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Qualifications</h3>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Undergraduate (UG)</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.ugQualification
                            ? `${selectedTeacher.ugQualification.university || "-"} (${selectedTeacher.ugQualification.year || "-"})`
                            : "-"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Postgraduate (PG)</p>
                        <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                          {selectedTeacher.pgQualification
                            ? `${selectedTeacher.pgQualification.subject || "-"}, ${selectedTeacher.pgQualification.university || "-"} (${selectedTeacher.pgQualification.year || "-"})`
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {Array.isArray(selectedTeacher.experience) && selectedTeacher.experience.length > 0 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.07)] md:p-6">
                      <div className="mb-4 flex items-center gap-3 md:mb-5">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg sm:h-10 sm:w-10">
                          <span className="text-lg">💡</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Teaching Experience</h3>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        {selectedTeacher.experience.map((exp, index) => (
                          <div
                            key={exp._key || index}
                            className="relative overflow-hidden rounded-xl border border-slate-100 border-l-4 border-l-red-600 bg-slate-50 p-4 shadow-sm md:p-5"
                          >
                            <p className="break-words text-base font-bold text-gray-900 sm:text-lg">
                              {exp.designation || "-"}
                            </p>
                            <p className="mt-2 break-words text-sm font-medium text-gray-600">
                              {exp.collegeName || "-"}
                            </p>
                            <p className="mt-3 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
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
        )}
      </div>
    </section>
  );
}
