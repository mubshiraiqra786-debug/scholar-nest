"use client";

import React from "react";
import { services } from "@/lib/servicesData";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <div
          className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 mb-20
                aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]
                flex items-center justify-center text-center"
        >
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

        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Academic Integrity
            </span>
            <p className="text-xl font-black text-slate-900">100% Plagiarism-Free</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Vetted Experts
            </span>
            <p className="text-xl font-black text-slate-900">500+ PhD Consultants</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col hover:shadow-lg items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Privacy First
            </span>
            <p className="text-xl font-black text-slate-900">Military-Grade Encryption</p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-black text-slate-900 mb-2">Our Specialized Services</h2>
          <p className="text-slate-500">Tailored support for every stage of your academic journey.</p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug} // ✅ anchors for /services#slug
              className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left scroll-mt-28"
            >
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-[#FF6B00] w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.long}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ EXTRA UNIQUE SECTION (helps avoid duplication + improves SEO intent) */}
        <div className="mt-20 bg-slate-50 border border-slate-100 rounded-2xl p-10">
          <h3 className="text-2xl font-black text-slate-900 mb-4">How it works</h3>
          <ol className="list-decimal pl-6 space-y-2 text-slate-600">
            <li>Tell us your goals and timeline.</li>
            <li>We match you with the right academic consultant.</li>
            <li>You receive structured guidance, feedback, and revisions (within ethical boundaries).</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
