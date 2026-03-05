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
        <div className="mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {teachers.map((teacher) => (
            <button
              type="button"
              key={teacher._id}
              className="w-full rounded-xl border border-[#d8dde6] border-t-[3px] border-t-[var(--red)] bg-white p-4 pb-[14px] text-left shadow-[0_4px_10px_rgba(0,0,0,0.04)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[rgba(222,0,0,0.35)] hover:shadow-[0_12px_22px_rgba(14,19,23,0.1)]"
              onClick={() => openTeacher(teacher._id)}
            >
              <h3 className="mb-[14px] min-h-[50px] text-[18px] font-semibold leading-[1.25] text-[#101217] md:text-[20px]">
                {getPersonName(teacher.fullName)}
              </h3>
              <p className="mb-2 flex flex-col gap-[2px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6f7784]">Code</span>
                <strong className="break-words text-sm font-semibold text-[#1a1f29]">{teacher.teacherCode || "-"}</strong>
              </p>
              <p className="mb-2 flex flex-col gap-[2px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6f7784]">Department</span>
                <strong className="break-words text-sm font-semibold text-[#1a1f29]">{getDepartmentName(teacher.department)}</strong>
              </p>
              <p className="mb-2 flex flex-col gap-[2px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6f7784]">Photo</span>
                <strong className="break-words text-sm font-semibold text-[#1a1f29]">
                  {teacher.teacherPhoto?.asset?.url ? "Available" : "-"}
                </strong>
              </p>
              <div className="mt-1 text-[13px] font-bold text-[var(--red)]">View complete profile</div>
              {loadingTeacherId === teacher._id && (
                <small className="font-semibold text-[#3f6cb0]">Loading details...</small>
              )}
            </button>
          ))}
        </div>
      )}

      {isModalOpen && selectedTeacher && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(13,19,23,0.68)] p-5"
          onClick={closeModal}
        >
          <div
            className="max-h-[86vh] w-full max-w-[760px] overflow-y-auto rounded-xl border-t-4 border-t-[var(--red)] bg-white px-[18px] pt-[18px] pb-5 shadow-[0_24px_42px_rgba(0,0,0,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-[14px] flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-[11px] font-bold uppercase tracking-[0.08em] text-[#566074]">
                  Naiminath Faculty Details
                </p>
                <h2 className="mt-1 text-[22px] leading-tight text-[#101217] md:text-[28px]">
                  {getPersonName(selectedTeacher.fullName)}
                </h2>
              </div>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-[rgba(222,0,0,0.35)] bg-[rgba(222,0,0,0.08)] px-[14px] py-2 font-semibold text-[#8f1616] transition hover:border-[var(--red)] hover:bg-[var(--red)] hover:text-white"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Teacher Code</span>
                <strong className="break-words text-[#171b24]">{selectedTeacher.teacherCode || "-"}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Department</span>
                <strong className="break-words text-[#171b24]">{getDepartmentName(selectedTeacher.department)}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Father Name</span>
                <strong className="break-words text-[#171b24]">{getPersonName(selectedTeacher.fatherName)}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">DOB</span>
                <strong className="break-words text-[#171b24]">{selectedTeacher.dob || "-"}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Qualification</span>
                <strong className="break-words text-[#171b24]">
                  UG:{" "}
                  {selectedTeacher.ugQualification
                    ? `${selectedTeacher.ugQualification.university || "-"} (${selectedTeacher.ugQualification.year || "-"})`
                    : "-"}
                </strong>
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">PG Qualification</span>
                <strong className="break-words text-[#171b24]">
                  {selectedTeacher.pgQualification
                    ? `${selectedTeacher.pgQualification.subject || "-"}, ${selectedTeacher.pgQualification.university || "-"} (${selectedTeacher.pgQualification.year || "-"})`
                    : "-"}
                </strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Nature of Appointment</span>
                <strong className="break-words text-[#171b24]">{selectedTeacher.natureOfPresentAppointment || "-"}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Local Residential Address</span>
                <strong className="break-words text-[#171b24]">{selectedTeacher.localResidentialAddress || "-"}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Permanent Address</span>
                <strong className="break-words text-[#171b24]">{selectedTeacher.permanentAddress || "-"}</strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">State Board</span>
                <strong className="break-words text-[#171b24]">
                  {selectedTeacher.stateBoardRegistration?.boardName || "-"}
                </strong>
              </p>
              <p className="m-0 flex flex-col gap-[2px] rounded-[10px] border border-[#e2e6ec] bg-[#fcfcfd] px-3 py-[10px]">
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#6d7683]">Registration Number</span>
                <strong className="break-words text-[#171b24]">
                  {selectedTeacher.stateBoardRegistration?.registrationNumber ||
                    "-"}
                </strong>
              </p>
            </div>

            {selectedTeacher.teacherPhoto?.asset?.url && (
              <div className="mt-4 border-t border-[#e5ebf3] pt-[14px]">
                <h3 className="text-[18px] font-semibold text-[#141923]">Teacher Photo</h3>
                <img
                  src={selectedTeacher.teacherPhoto.asset.url}
                  alt={getPersonName(selectedTeacher.fullName)}
                  className="mt-2 h-[150px] w-[150px] rounded-[10px] border border-[#d8dde6] object-cover"
                />
                <p className="mt-[6px] text-xs text-[#5e6b80]">
                  {selectedTeacher.teacherPhoto.caption || ""}
                </p>
              </div>
            )}

            {Array.isArray(selectedTeacher.experience) &&
              selectedTeacher.experience.length > 0 && (
                <div className="mt-4 border-t border-[#e5ebf3] pt-[14px]">
                  <h3 className="mb-2 text-[18px] font-semibold text-[#141923]">Experience</h3>
                  <ul className="pl-[18px] text-[#33445f]">
                    {selectedTeacher.experience.map((exp, index: number) => (
                      <li key={exp._key || index} className={index > 0 ? "mt-[6px]" : ""}>
                        <strong>{exp.designation || "-"}</strong> at{" "}
                        {exp.collegeName || "-"}
                        <br />
                        {exp.durationType === "single"
                          ? `Date: ${exp.singleDate || "-"}`
                          : `From: ${formatDate(exp.fromDate)} | To: ${formatDate(exp.toDate)}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
