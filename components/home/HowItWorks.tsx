import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      n: 1,
      t: "Submit Details",
      d: "Upload your assignment brief, syllabus, and any specific requirements from your professor.",
    },
    {
      n: 2,
      t: "Match with Expert",
      d: "We pair your request with a subject-matter expert who holds an advanced degree in your field.",
    },
    {
      n: 3,
      t: "Review Drafts",
      d: "Receive initial drafts for feedback and request revisions to ensure perfect alignment.",
    },
    {
      n: 4,
      t: "Final Delivery",
      d: "Download your final, polished materials ready for submission according to your deadline.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Simple, transparent, and professional four-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.n} className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-200">
                {step.n}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
