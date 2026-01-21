"use client";

import React, { useRef, useState } from "react";
import {
  ClipboardList,
  Clock,
  UploadCloud,
  ShieldCheck,
  Zap,
  Headphones,
  Timer,
  Lock,
} from "lucide-react";

const OrderNow: React.FC = () => {
  const [level, setLevel] = useState<"undergraduate" | "graduate">("undergraduate");
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    setFileName(file.name);
    // NOTE: yahan aap file ko form-state / upload logic me store kar sakti hain
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-35 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 relative">
          <div className="absolute top-0 right-0 hidden sm:block">
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
            Calculate Your Project Estimate
          </h1>
          <p className="text-gray-500 text-sm">
            Professional assistance with institutional trust and academic integrity.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <form className="p-8 space-y-10">
            {/* Project Details Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-[#f97316]">
                <ClipboardList className="w-5 h-5" />
                <h2 className="font-bold text-slate-800 text-sm">Project Details</h2>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Academic Level
                </label>
                <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100">
                  <button
                    type="button"
                    onClick={() => setLevel("undergraduate")}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                      level === "undergraduate"
                        ? "bg-white shadow-sm text-slate-900 ring-1 ring-black/5"
                        : "text-slate-400"
                    }`}
                  >
                    Undergraduate
                  </button>
                  <button
                    type="button"
                    onClick={() => setLevel("graduate")}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                      level === "graduate"
                        ? "bg-[#fdf2f2] text-[#f97316]"
                        : "text-slate-400"
                    }`}
                  >
                    Graduate
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Subject Area
                  </label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:ring-2 focus:ring-orange-100 outline-none appearance-none">
                    <option>Select Subject</option>
                    <option>Business & Economics</option>
                    <option>Social Sciences</option>
                    <option>STEM Fields</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Assignment Type
                  </label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:ring-2 focus:ring-orange-100 outline-none appearance-none">
                    <option>Essay</option>
                    <option>Research Paper</option>
                    <option>Case Study</option>
                    <option>Dissertation</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Volume & Deadline Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-[#f97316]">
                <Clock className="w-5 h-5" />
                <h2 className="font-bold text-slate-800 text-sm">Volume & Deadline</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Word Count
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:ring-2 focus:ring-orange-100 outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 uppercase">
                      words
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Deadline Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Project Resources Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-[#f97316]">
                <div className="w-5 h-5 bg-[#f97316] rounded flex items-center justify-center">
                  <UploadCloud className="w-3.5 h-3.5 text-white" />
                </div>
                <h2 className="font-bold text-slate-800 text-sm">Project Resources</h2>
              </div>

              {/* Hidden File Input (real picker) */}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFiles(e.target.files)}
              />

              {/* Click + Drag/Drop Zone (same theme/style) */}
              <div
                role="button"
                tabIndex={0}
                onClick={openFilePicker}
                onKeyDown={(e) => e.key === "Enter" && openFilePicker()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50/30 group hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <UploadCloud className="text-[#f97316] w-6 h-6" />
                </div>

                <p className="text-sm font-bold text-slate-900 mb-1">
                  {fileName ? `Selected: ${fileName}` : "Click to upload or drag and drop"}
                </p>
                <p className="text-[10px] text-gray-400">
                  Syllabus, rubrics, or instructions (PDF, DOCX, up to 10MB)
                </p>
              </div>
            </section>

            {/* Action Section */}
            <div className="pt-4 text-center">
              <button
                type="button"
                className="w-full bg-[#f97316] text-white py-4 rounded-xl text-sm font-bold shadow-lg hover:shadow-orange-200 hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
              >
                Calculate Estimate &amp; Proceed <Zap className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Trust Badges Footer */}
          <div className="bg-[#fcfcfc] border-t border-gray-50 px-8 py-6 flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                100% Secure
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                Turnitin-Safe
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                24/7 Support
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                On-Time or Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
