"use client";

import { useState, useEffect } from "react";
import { plants } from "../../(data)/plants";

interface PlantItem {
  title: string;
  image: string;
  pdf: string;
}

const DigitalHerbalGardenFinal = () => {
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  /* ---------------- PAGINATION CONFIG ---------------- */
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(plants.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems: PlantItem[] = plants.slice(indexOfFirstItem, indexOfLastItem);

  /* Auto-scroll to top when page changes */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 xs:py-12 px-2 sm:px-4 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-10 xs:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 tracking-tight leading-snug">
          🌿 Digital Herbal Garden
        </h1>
        <p className="text-base xs:text-xl text-gray-600 mt-3 max-w-2xl mx-auto px-4">
          Explore the medicinal properties and detailed information of various
          traditional herbs.
        </p>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Table Layout */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-green-100/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider w-[20%]">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider w-[55%]">
                  Plant Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider w-[20%]">
                  Details
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-100">
              {currentItems.map((plant: PlantItem, index: number) => (
                <>
                  <tr
                    key={index}
                    className="hover:bg-yellow-50 transition duration-150 ease-in-out"
                  >
                    {/* Image Cell */}
                    <td className="p-2 sm:p-4 whitespace-nowrap w-[20%]">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-300">
                        <img
                          src={plant.image}
                          alt={plant.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    {/* Title Cell */}
                    <td className="px-4 py-3 sm:py-4 w-[55%]">
                      <div className="text-sm sm:text-lg font-semibold text-green-800">
                        {plant.title}
                      </div>
                    </td>

                    {/* Button Cell */}
                    <td className="px-4 py-3 sm:py-4 whitespace-nowrap text-center w-[25%]">
                      <button
                        onClick={() => togglePdf(plant.pdf)}
                        className={`
                          flex items-center justify-center gap-1 
                          px-2 py-1.5 rounded-full text-xs sm:text-sm
                          shadow transition-all font-medium
                          ${
                            openPdf === plant.pdf
                              ? "bg-green-700 text-white"
                              : "bg-green-600 text-white hover:bg-green-700"
                          }
                        `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${
                            openPdf === plant.pdf ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        {openPdf === plant.pdf ? "Close" : "View"}
                      </button>
                    </td>
                  </tr>

                  {/* PDF Viewer Row */}
                  {openPdf === plant.pdf && (
                    <tr key={`${index}-pdf`} className="bg-gray-50">
                      <td colSpan={3} className="p-0">
                        <div className="p-4 border-t border-gray-200">
                          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                            {/* PDF Header */}
                            <div className="bg-green-700 text-white px-4 py-2 flex justify-between items-center">
                              <h4 className="font-semibold text-sm sm:text-base">
                                {plant.title} - Plant Details
                              </h4>

                              <button
                                onClick={() => setOpenPdf(null)}
                                className="text-yellow-300 hover:text-white transition-colors p-1 rounded-full hover:bg-green-800"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                              </button>
                            </div>

                            {/* PDF Viewer */}
                            <div className="h-96 sm:h-[500px] w-full">
                              <iframe
                                src={`https://docs.google.com/gview?embedded=true&url=${plant.pdf}`}
                                className="w-full h-full border-none"
                                title={`PDF Viewer - ${plant.title}`}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------------- PAGINATION CONTROLS ---------------- */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 gap-4">
          {/* Prev + Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-3 py-1 rounded-lg border 
        ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }
      `}
            >
              Prev
            </button>

            {/* Page Display */}
            <div className="text-gray-700 font-semibold text-sm px-3">
              Page {currentPage} of {totalPages}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-3 py-1 rounded-lg border 
        ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }
      `}
            >
              Next
            </button>
          </div>

          {/* Go To Page */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-sm">Go to:</span>
            <input
              type="number"
              min="1"
              max={totalPages}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const page = Number((e.target as HTMLInputElement).value);
                  if (page >= 1 && page <= totalPages) setCurrentPage(page);
                }
              }}
              className="w-16 px-2 py-1 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalHerbalGardenFinal;
