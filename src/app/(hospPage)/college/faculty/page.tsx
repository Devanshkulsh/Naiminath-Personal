"use client";

import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import type { Teacher } from "@/types/teacher";
import { mapRowToTeacher } from "@/app/(helpers)/mapTeacher";

// ---------- helpers ----------
const isValidImageUrl = (url?: string) => {
  if (!url) return false;
  return url.startsWith("http://") || url.startsWith("https://");
};

const Faculty = () => {
  const { setImageSlide } = useGlobalContext();

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Teacher | null>(null);

  // Disable image slider
  useEffect(() => {
    setImageSlide(false);
  }, [setImageSlide]);

  // Fetch teachers
  useEffect(() => {
    fetch("/api/teachers")
      .then(res => res.json())
      .then(result => {
        const rows: string[][] = result.data ?? [];
        const mapped = rows.slice(1).map(mapRowToTeacher);
        setTeachers(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Group teachers by department
  const groupedByDepartment = teachers.reduce<Record<string, Teacher[]>>(
    (acc, teacher) => {
      const dept = teacher.department?.trim();
      if (!dept) return acc;

      if (!acc[dept]) acc[dept] = [];
      acc[dept].push(teacher);

      return acc;
    },
    {}
  );

  return (
    <>
      <head>
        <title>Faculty - Naiminath Ayurveda</title>
        <meta name="description" content="Faculty details" />
      </head>

      <div className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl mt-10 text-gray-800 text-center font-bold">
          Faculty
        </h1>

        {loading && (
          <div className="text-center my-10 text-gray-500">
            Loading faculty data...
          </div>
        )}

        {!loading && (
          <div className="space-y-16 my-12">
            {Object.entries(groupedByDepartment).map(
              ([department, faculty]) => (
                <section key={department}>
                  {/* Department heading */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 uppercase text-center">
                    DEPARTMENT OF {department}
                  </h2>

                  {/* Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {faculty.map((teacher, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelected(teacher)}
                        className="cursor-pointer bg-white rounded-xl shadow-md ring-1 ring-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition"
                      >
                        <img
                          src={
                            isValidImageUrl(teacher.photo)
                              ? teacher.photo
                              : "/placeholder-avatar.png"
                          }
                          alt={teacher.firstName}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />

                        <h3 className="text-center mt-4 font-semibold text-gray-800">
                          {teacher.surname}{" "}
                          {teacher.firstName}{" "}
                          {teacher.middleName}
                        </h3>

                        <p className="text-center text-sm text-gray-500 mt-1">
                          Teacher Code: {teacher.teacherCode}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )
            )}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center">
              <img
                src={
                  isValidImageUrl(selected.photo)
                    ? selected.photo
                    : "/placeholder-avatar.png"
                }
                alt={selected.firstName}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />

              <h2 className="text-xl font-bold mt-4">
                {selected.surname}{" "}
                {selected.firstName}{" "}
                {selected.middleName}
              </h2>

              <p className="text-gray-500">
                Teacher Code: {selected.teacherCode}
              </p>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-3 text-sm text-gray-800">
              <p><strong>Father’s Name:</strong> {selected.fatherName}</p>
              <p><strong>Date of Birth:</strong> {selected.dateOfBirth}</p>
              <p><strong>Department:</strong> {selected.department}</p>
              <p><strong>Designation:</strong> {selected.designation}</p>
              <p><strong>Nature of Appointment:</strong> {selected.appointmentNature}</p>
              <p><strong>UG Qualification:</strong> {selected.ugQualification}</p>
              <p><strong>PG Qualification:</strong> {selected.pgQualification}</p>
              <p><strong>College Name:</strong> {selected.collegeName}</p>
              <p><strong>State Board & Registration:</strong> {selected.stateBoardRegistration}</p>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Date wise details of Experience (1st appointment to till date)
              </h3>

              <ul className="space-y-2 text-sm">
                {selected.experienceDuration
                  ?.split(";")
                  .filter(Boolean)
                  .map((exp, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-gray-400 pl-3"
                    >
                      {exp}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Faculty;
