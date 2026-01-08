"use client";

import { FileText, ExternalLink, ShieldCheck } from "lucide-react";

type DocumentItem = {
  title: string;
  url: string;
};

const documents: DocumentItem[] = [
  {
    title: "Yearly Permission",
    url: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1767866612/Yearly_Permission_quk01z.pdf",
  },
  // Add more PDFs here if needed
];

export default function Documents(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center text-center border-b border-gray-200 pb-8">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600 mb-4 shadow-sm ring-1 ring-blue-100">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            REGULATORY INFO - NCISM Mandate
          </h2>
        </div>

        {/* Documents List */}
        <div className="space-y-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="px-5 py-4 sm:px-6 border-b border-gray-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">
                    {doc.title}
                  </h3>
                </div>

                {/* Desktop Action (Hidden on mobile) */}
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* PDF Viewer Container */}
              <div className="relative bg-gray-50 w-full h-[400px] sm:h-[500px] md:h-[600px]">
                <iframe
                  src={`${doc.url}#toolbar=0`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title={doc.title}
                />
              </div>

              {/* Mobile Footer Action (Visible only on mobile) */}
              <div className="sm:hidden p-4 bg-gray-50 border-t border-gray-100">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
                >
                  <span>Open PDF in New Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}