"use client";

import React, { useEffect } from "react";
import {
  ShieldCheck,
  Download,
  ChevronRight,
  Clock,
} from "lucide-react";

type Props = {
  initialSection?: "tos" | "ethical" | "privacy" | "cookie";
};

export default function PoliciesPage({ initialSection = "tos" }: Props) {
  const sections = [
    { id: "tos", label: "Terms of Service" },
    { id: "ethical", label: "Ethical Policy" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "cookie", label: "Cookie Policy" },
  ] as const;

  useEffect(() => {
    // page open hote hi specific section pe scroll
    const hash = window.location.hash.replace("#", "");
    const target = hash || initialSection; // fallback
    const el = document.getElementById(initialSection);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [initialSection]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Header */}
      <header className="border-b border-gray-100 px-8 py-4 flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Academic 3</span>
        </div>
        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            Share
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-100 p-8 hidden lg:block h-[calc(100vh-65px)] sticky top-[65px]">
          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
              Jump to Section
            </p>

            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center justify-between p-2 rounded-md text-sm transition-colors text-gray-500 hover:bg-gray-50"
              >
                {section.label}
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}
          </nav>

          <div className="mt-12 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs font-bold mb-2">Need Help?</p>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Our compliance team is available to clarify any institutional requirements.
            </p>
            <a href="#" className="text-xs font-bold text-orange-600 hover:underline">
              Contact Compliance →
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-16 max-w-4xl">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Legal & Ethical Policies Overview
            </h1>
          </div>

  {/* Terms of Service Section */}
  <section id="tos" className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Terms of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Welcome to AcademicTrust. By accessing our platform, you agree to abide by these Terms of Service. These terms govern your use of our academic assistance tools, expert consultation services, and content library designed for higher education students in the United States.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-3">1. Scope of Service</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AcademicTrust provides tutoring and consultation services designed to supplement classroom learning. We offer guidance on complex topics, research methodology support, and structured review services. Users are expected to use these materials as study aids and reference points only.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">2. User Responsibilities</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You must be at least 18 years old or an emancipated minor to use this service. You are responsible for maintaining the confidentiality of your account credentials. You agree not to use the service for any purpose that violates local, state, or federal laws, or your specific institutional policies.
                </p>
              </div>
            </div>

            {/* Ethical Policy Highlight Box */}
            <div id="ethical" className="mt-12 bg-orange-50/50 border border-orange-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-orange-500 w-6 h-6" />
                <h2 className="text-xl font-bold text-slate-900">Ethical Policy & Academic Integrity</h2>
              </div>
              <p className="text-gray-600 italic text-sm mb-6">
                AcademicTrust is built on the foundation of institutional trust. Our services are strictly designed to support—not replace—your original academic efforts.
              </p>
              
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Zero Plagiarism Guarantee</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-8">
                All work delivered by our consultants is original and intended for your personal reference. We do not provide completed assignments for submission. Submitting work purchased or downloaded from AcademicTrust as your own is a direct violation of our policy and your university's code of conduct.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Permitted Use
                  </h4>
                  <ul className="space-y-3 text-xs text-gray-600">
                    <li className="flex gap-2"><span>•</span> Explanation of complex concepts</li>
                    <li className="flex gap-2"><span>•</span> Feedback on your own drafts</li>
                    <li className="flex gap-2"><span>•</span> Formatting and citation guidance</li>
                    <li className="flex gap-2"><span>•</span> Research source identification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Prohibited Use
                  </h4>
                  <ul className="space-y-3 text-xs text-gray-600">
                    <li className="flex gap-2"><span>•</span> Submitting our guides as your own</li>
                    <li className="flex gap-2"><span>•</span> Requesting exam solutions</li>
                    <li className="flex gap-2"><span>•</span> Circumventing proctoring software</li>
                    <li className="flex gap-2"><span>•</span> Forging academic credentials</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section id="privacy" className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We take your privacy seriously. AcademicTrust operates in full compliance with relevant data protection regulations and respects the privacy standards established by FERPA (Family Educational Rights and Privacy Act).
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">1. Data Collection</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We collect only the information necessary to provide and improve our services. This includes your contact information, billing details for paid tiers, and usage logs to enhance platform performance. We do not sell your personal information to third parties.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">2. Data Security</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We employ enterprise-grade encryption (AES-256) for all stored data and secure SSL/TLS protocols for data in transit. Access to student data is restricted to authorized personnel who have undergone background checks and privacy training.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">3. Institutional Disclosure</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  AcademicTrust does not proactively share student usage data with universities unless legally required to do so via subpoena or in direct response to a verifiable investigation of extreme academic fraud as outlined in our Terms.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Policy Section */}
          <section id="cookie" className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookie Policy</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              Our platform uses cookies to maintain your session, remember your preferences, and provide localized content. We differentiate between "Essential Cookies" required for platform stability and "Analytical Cookies" used for performance monitoring.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
