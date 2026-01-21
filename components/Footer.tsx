import React from "react";
import { BookOpen, Mail, Facebook, Instagram, } from "lucide-react";

type FooterProps = {
  onNavigate?: (pageId: string) => void;
  onOpenPolicies: (section: "tos"|"ethical"|"privacy"|"cookie") => void;
  };

export default function Footer({onNavigate, onOpenPolicies }: FooterProps) {
  return (
    <section className="bg-[#1a232e] text-gray-300 py-6 px-8 font-sans">
    <footer>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#FF6B00] p-1.5 rounded-lg">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                AcademiaSupport
              </span>
            </div>

            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              Ethical academic consulting for the next generation of leaders.
              Ensuring excellence through integrity and professional rigor.
            </p>

            <p className="text-xs text-gray-400 italic">
              © 2024 AcademiaPro Consulting LLC. All rights reserved.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
          <h3 className="font-bold mb-6 text-sm text-orange-500">Contact Support</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-orange-500" />
              <a href="mailto:support@academichelp.edu" className="hover:text-[#FF6B00] transition-colors">support@academichelp.edu</a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="w-4 h-4 text-orange-500" />
              <a href="#" className="hover:text-[#FF6B00] transition-colors">facebook.com/AcademicHelpUS</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-orange-500" />
              <a href="#" className="hover:text-[#FF6B00] transition-colors">@AcademicHelpUS</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm text-orange-500">Company</h4>
          <button
          type="button"
          onClick={() => onNavigate?.("about")}
          className="block text-left hover:text-[#FF6B00] space-y-4 mb-3 text-sm text-gray-400 transition"
        >
          About Us
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.("services")}
          className="block text-left hover:text-[#FF6B00] space-y-4 mb-3 text-sm text-gray-400 transition"
        >
          Services
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.("reviews")}
          className="block text-left hover:text-[#FF6B00] space-y-4 mb-3 text-sm text-gray-400 transition"
        >
          Reviews
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.("contact")}
          className="block text-left hover:text-[#FF6B00] space-y-4 mb-3 text-sm text-gray-400 transition"
        >
          Contact Us
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.("order")}
          className="block text-left hover:text-[#FF6B00] space-y-4 mb-3 text-sm text-gray-400 transition"
        >
          Order now
        </button>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm text-orange-500">Legal</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
              <li>
              <button onClick={() => onOpenPolicies("privacy")} className="hover:text-[#FF6B00]">
                Privacy Policy
              </button>
              </li>
              <li>
              <button onClick={() => onOpenPolicies("tos")} className="hover:text-[#FF6B00]">
               Terms of Service
              </button>
              </li>
              <li>
             <button onClick={() => onOpenPolicies("ethical")} className="hover:text-[#FF6B00]">
             Ethics Policy
             </button>
             </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-4 pb-8">
        <h4 className="text-[20px] font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Academic Disclaimer</h4>
        <p className="text-[15px] text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Services provided by Academic Help are intended for research assistance, tutoring, and guidance purposes only. These materials are not intended to be submitted as original student work. We strictly adhere to institutional honor codes and encourage students to ensure all final submissions represent their own original efforts and learning.
        </p>
      </div>
    </footer>
    </section>
  );
}
