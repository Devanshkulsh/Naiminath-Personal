"use client";
import {
  getAllTeachers,
  getTeacherById,
  TeacherDetail,
  TeacherListItem,
} from "@/api/teachers";
import { useEffect, useState } from "react";
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
            Meet Our Team
          </div>
          <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
            Our Faculty
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teachers.map((teacher) => (
              <div
                key={teacher._id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500/20"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {teacher.teacherPhoto?.asset?.url ? (
                    <img
                      src={teacher.teacherPhoto.asset.url}
                      alt={getPersonName(teacher.fullName)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-600 to-red-700">
                      <span className="text-6xl font-bold text-white drop-shadow-lg">
                        {getPersonName(teacher.fullName).charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-sm">
                      {getDepartmentName(teacher.department)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-4 line-clamp-2 min-h-[3.5rem] text-xl font-bold text-gray-900">
                    {getPersonName(teacher.fullName)}
                  </h3>
                  <button
                    onClick={() => openTeacher(teacher._id)}
                    disabled={loadingTeacherId === teacher._id}
                    className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                  >
                    <span className="relative z-10">
                      {loadingTeacherId === teacher._id ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                          Loading...
                        </span>
                      ) : (
                        "View Profile →"
                      )}
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-700 to-red-800 transition-transform duration-300 group-hover/btn:translate-x-0"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {isModalOpen && selectedTeacher && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            onClick={closeModal}
          >
            <div
              className="relative max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:rotate-90"
                onClick={closeModal}
              >
                <span className="text-2xl">×</span>
              </button>

              <div className="max-h-[95vh] overflow-y-auto">
                <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-8 py-16 text-center text-white">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                  {selectedTeacher.teacherPhoto?.asset?.url ? (
                    <img
                      src={selectedTeacher.teacherPhoto.asset.url}
                      alt={getPersonName(selectedTeacher.fullName)}
                      className="relative z-10 mx-auto mb-6 h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl ring-4 ring-white/20"
                    />
                  ) : (
                    <div className="relative z-10 mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border-4 border-white bg-white/10 text-6xl font-bold shadow-2xl backdrop-blur-sm ring-4 ring-white/20">
                      {getPersonName(selectedTeacher.fullName).charAt(0)}
                    </div>
                  )}
                  <h2 className="relative z-10 text-4xl font-extrabold">
                    {getPersonName(selectedTeacher.fullName)}
                  </h2>
                  <p className="relative z-10 mt-3 text-lg font-medium text-white/90">
                    {getDepartmentName(selectedTeacher.department)}
                  </p>
                </div>

                <div className="space-y-6 bg-gradient-to-b from-gray-50 to-white p-8 md:p-10">
                
                  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                        <span className="text-lg">💼</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Professional Information</h3>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Faculty Code</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.teacherCode || "-"}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Nature of Appointment</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.natureOfPresentAppointment || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                        <span className="text-lg">📋</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Registration Details</h3>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Board Name</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.stateBoardRegistration?.boardName || "-"}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Registration Number</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.stateBoardRegistration?.registrationNumber || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg">
                        <span className="text-lg">🎓</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Qualifications</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Undergraduate (UG)</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.ugQualification
                            ? `${selectedTeacher.ugQualification.university || "-"} (${selectedTeacher.ugQualification.year || "-"})`
                            : "-"}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Postgraduate (PG)</p>
                        <p className="text-base font-semibold text-gray-900">
                          {selectedTeacher.pgQualification
                            ? `${selectedTeacher.pgQualification.subject || "-"}, ${selectedTeacher.pgQualification.university || "-"} (${selectedTeacher.pgQualification.year || "-"})`
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {Array.isArray(selectedTeacher.experience) && selectedTeacher.experience.length > 0 && (
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                          <span className="text-lg">💡</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Teaching Experience</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedTeacher.experience.map((exp, index) => (
                          <div
                            key={exp._key || index}
                            className="group/exp relative overflow-hidden rounded-xl border-l-4 border-red-600 bg-gradient-to-br from-gray-50 to-white p-5 shadow-sm transition-all hover:shadow-md"
                          >
                            <p className="text-lg font-bold text-gray-900">
                              {exp.designation || "-"}
                            </p>
                            <p className="mt-2 text-sm font-medium text-gray-600">
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
