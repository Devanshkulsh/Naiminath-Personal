"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface PdfViewerPageProps {
  params: {
    name: string;
  };
}

const PDF: React.FC<PdfViewerPageProps> = ({ params }) => {
  const router = useRouter();
  const { name } = params;
  const cloudName = "dhlqc0ymy";

  const pdfUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${name}`;

  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);


  const formattedName = name
    .replace(/_[a-zA-Z0-9]+\.pdf$/i, ".pdf")
    .replace(/_/g, " ")
    .replace(/bsnyxt/gi, "")
    .replace(/Bala Sida Cordifolia/i, "Bala (Sida Cordifolia)")
    .trim(); 

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.15, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.15, 0.55));

  useEffect(() => {
    // Preload iframe a bit earlier
    const iframe = document.getElementById("pdf-iframe") as HTMLIFrameElement | null;
    if (iframe) {
      iframe.onload = () => setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-20">
      {/* Top Bar */}
      <div className="w-full bg-white shadow-md flex items-center justify-between px-3 sm:px-5 py-3 sticky top-0 z-50">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
        >
          ← Back
        </button>

        <h1
          className="text-center flex-1 text-xs sm:text-base md:text-lg font-medium text-gray-800 px-2 truncate"
          title={formattedName}
        >
          {formattedName}
        </h1>

        <a
          href={pdfUrl}
          download
          className="px-3 py-1.5 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition"
        >
          Download
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-5xl mt-3 bg-white shadow-lg rounded-xl border overflow-hidden">
        {loading && (
          <div className="flex justify-center items-center h-[75vh] sm:h-[80vh]">
            <div className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="w-full overflow-auto touch-pinch-zoom">
          <iframe
            id="pdf-iframe"
            src={`${pdfUrl}#toolbar=1&zoom=page-width`}
            title={formattedName}
            loading="lazy"
            style={{
              width: `${100 / zoom}%`,
              height: "85vh",
              transition: "width 0.2s ease",
            }}
            className={`block mx-auto ${loading ? "opacity-0" : "opacity-100"
              }`}
          />
        </div>
      </div>

      {/* Zoom Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50">
        <button
          onClick={zoomIn}
          className="bg-white border shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-2xl hover:bg-gray-200"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="bg-white border shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-2xl hover:bg-gray-200"
        >
          –
        </button>
      </div>
    </div>
  );
};

export default PDF;
