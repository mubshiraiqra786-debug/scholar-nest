"use client";

import React from "react";
import { BookOpen, Briefcase, ChevronRight, FileText, GraduationCap, Presentation, Target } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { icon: FileText, title: "Editing & Proofreading", description: "Refine your academic voice with expert focus on clarity, structural flow, and precise citation accuracy (APA, MLA, Chicago). Our editors ensure your arguments are persuasive and professionally presented." },
    { icon: Briefcase, title: "Business Writing", description: "Strategic assistance for MBA reports, complex case studies, and corporate communication projects. We bridge the gap between academic theory and real-world professional standards for executive-level quality." },
    { icon: BookOpen, title: "Coursework Help", description: "Guided research methodology and strategic support for complex undergraduate and postgraduate modules. Receive mentorship on quantitative analysis, literature reviews, and subject-specific rigor." },
    { icon: GraduationCap, title: "Dissertation Consulting", description: "End-to-end consulting for PhD candidates. We provide high-level feedback on proposal development, data interpretation, and final defense preparation while maintaining complete ethical boundaries." },
    { icon: Target, title: "Admissions Strategy", description: "Perfect your personal statements and graduate school applications. Our consultants help you highlight your unique academic journey to stand out in competitive US university admission pools." },
    { icon: Presentation, title: "Presentation Design", description: "Visual storytelling for your research. We design clean, professional slides that effectively communicate complex data and findings for symposiums and thesis defenses." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 mb-20 aspect-[21/9] flex items-center justify-center text-center">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Library"
          />
          <div className="relative z-10 px-6 space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Elevate Your Academic Performance
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium">
              Professional consulting and ethical assistance tailored for US university students.
              <br className="hidden md:block" />
              We focus on clarity, rigor, and strict adherence to institutional academic integrity standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Academic Integrity</span>
            <p className="text-xl font-black text-slate-900">100% Plagiarism-Free</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Vetted Experts</span>
            <p className="text-xl font-black text-slate-900">500+ PhD Consultants</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Privacy First</span>
            <p className="text-xl font-black text-slate-900">Military-Grade Encryption</p>
          </div>
        </div>


        <div className="mb-12 text-left">
          <h2 className="text-4xl font-black text-slate-900 mb-2">Our Specialized Services</h2>
          <p className="text-slate-500">Tailored support for every stage of your academic journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left">
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-[#FF6B00] w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
            </div>
            
          ))}
          
        </div>
       
      </div>
    </div>
  );
}
