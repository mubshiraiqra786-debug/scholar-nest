"use client";

import React from "react";
import {
  ShieldCheck,
  UserCheck,
  LayoutDashboard,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  onContact?: () => void;

};

export default function AcademicIntegrityPage({ onContact, }: Props) {
  const scrollToUsePolicy = () => {
    const el = document.getElementById("use-policy");
    if (!el) return;

    const headerOffset = 90; // navbar height approx
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">

      {/* Hero Section */}
      <main className="w-full max-w-7xl px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="academic.jpeg"
            alt="University Campus"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">
          <span className="text-orange-600 font-bold text-xs tracking-widest py-7 uppercase">
            Established Trust
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Bridging the gap between 
            <span className="text-orange-500"> academic pressure</span> and
            institutional excellence.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            {'"A modern platform dedicated to US university students, built on the pillars of transparency, rigorous ethics, and long-term academic success. We dont just provide answers; we foster understanding."'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button onClick={scrollToUsePolicy} className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200">
              View Our Standards
            </button>
            <button onClick={() => onContact?.()} className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all">
              Contact Compliance
            </button>
          </div>
        </div>
      </main>

      {/* Commitment Section */}
      <section className="w-full max-w-5xl px-1 py-10 border-t border-gray-100">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Commitment to Integrity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We uphold the highest ethical standards to ensure our assistance serves as a
            legitimate pedagogical tool. Our platform is designed to supplement learning
            while strictly adhering to University Honor Codes across the United States.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ShieldCheck className="text-orange-500 w-6 h-6" />}
            title="Anti-Plagiarism Protocols"
            description="Every output undergoes multi-layered scans using industry-standard detection tools to guarantee 100% originality and citation accuracy."
          />
          <FeatureCard
            icon={<UserCheck className="text-orange-500 w-6 h-6" />}
            title="Expert Verification"
            description="All support content is reviewed by US-based subject matter experts with advanced degrees to ensure strict academic accuracy and rigor."
          />
          <FeatureCard
            icon={<LayoutDashboard className="text-orange-500 w-6 h-6" />}
            title="Ethical Alignment"
            description="Our tools are structured to facilitate critical thinking and understanding, serving as a roadmap for student's own unique academic work."
          />
        </div>
      </section>

      {/* Use Policy Section */}
      <section id="use-policy" className="w-full max-w-5xl px-6 py-10 mb-20">
        <div className="bg-[#F8F7F5] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Academic Integrity & Use Policy
          </h2>

          <div className="bg-white p-6 rounded-xl italic text-gray-700 border-l-4 border-orange-500 mb-10 shadow-sm leading-relaxed">
            {'"Our mission is to empower students through knowledge, not to provide shortcuts. We maintain a zero-tolerance policy regarding the misuse of our platform for academic dishonesty."'}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-black text-green-600 uppercase tracking-widest mb-6">
                Permitted Use
              </h3>
              <ul className="space-y-4">
                <PolicyItem type="allow" text="Using model papers as reference guides for structure and citations." />
                <PolicyItem type="allow" text="Tutoring sessions focused on concept mastery and problem-solving." />
                <PolicyItem type="allow" text="Editing and proofreading for grammatical clarity and flow." />
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-red-600 uppercase tracking-widest mb-6">
                Strictly Prohibited
              </h3>
              <ul className="space-y-4">
                <PolicyItem type="deny" text="Submitting our reference materials as your own coursework." />
                <PolicyItem type="deny" text="Requesting assistance during live examinations or timed tests." />
                <PolicyItem type="deny" text="Any activity that violates your specific university's Code of Conduct." />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PolicyItem({ type, text }: { type: "allow" | "deny"; text: string }) {
  return (
    <li className="flex gap-3 items-start">
      {type === "allow" ? (
        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
      )}
      <span className="text-gray-700 text-sm font-medium">{text}</span>
    </li>
  );
}
