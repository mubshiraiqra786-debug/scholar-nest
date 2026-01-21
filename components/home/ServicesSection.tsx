"use client";

import React from "react";
import { BookOpen, Briefcase, ChevronRight, FileText } from "lucide-react";

type Props = {
  onGoServices: () => void;
};

export default function ServicesSection({ onGoServices }: Props) {
  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-center">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Specialized Services
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto">
            Tailored support for every stage of your academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left">
            <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FileText className="text-[#FF6B00] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Editing & Proofreading
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Refine your academic voice with expert focus on clarity, structural
              flow, and precise citation accuracy.
            </p>
            <button
              onClick={onGoServices}
              className="inline-flex items-center text-[#FF6B00] font-bold text-sm hover:gap-2 transition-all"
            >
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left">
            <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="text-[#FF6B00] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Business Writing
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Strategic assistance for MBA reports, complex case studies, and
              corporate communication projects.
            </p>
            <button
              onClick={onGoServices}
              className="inline-flex items-center text-[#FF6B00] font-bold text-sm hover:gap-2 transition-all"
            >
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left">
            <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="text-[#FF6B00] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Coursework Help
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Guided research methodology and strategic support for complex
              undergraduate and postgraduate modules.
            </p>
            <button
              onClick={onGoServices}
              className="inline-flex items-center text-[#FF6B00] font-bold text-sm hover:gap-2 transition-all"
            >
              Learn More <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
