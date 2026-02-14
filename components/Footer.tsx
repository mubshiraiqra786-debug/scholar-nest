import React from "react";
import type { PolicySection } from "@/lib/types";
import Image from "next/image";
import { Mail, Facebook, Instagram } from "lucide-react";

type FooterProps = {
  onNavigate: (p: string) => void;
  onOpenPolicies: (section: PolicySection) => void; // <-- yahan fix
};

export default function Footer({ onNavigate, onOpenPolicies }: FooterProps) {
  return (
    <footer className="bg-[#0f1b2a] text-gray-300 py-16 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* LEFT BRAND / ABOUT */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
            <Image
             src="/footer-image.png"
             alt="Scholar Nest"
             width={28}
             height={28}
             priority
            />
              <span className="text-xl font-extrabold text-orange-500">Scholar Nest</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Ethical academic consulting for the next generation of leaders. Ensuring excellence
              through integrity and professional rigor.
            </p>

            <p className="text-xs text-gray-500">
              © 2024 AcademiaPro Consulting LLC. All rights reserved.
            </p>
          </div>

          {/* RIGHT LINKS (IMPORTANT FIX: col-span) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* CONTACT SUPPORT */}
              <div>
                <h4 className="text-orange-500 font-bold text-sm mb-4">Contact Support</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <a className="hover:text-orange-400" href="mailto:support@scholar-nest.com">
                      support@scholar-nest.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-orange-400" />
                    <a className="hover:text-orange-400"
                       href="https://facebook.com/AcademicHelpUS"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      facebook.com/AcademicHelpUS
                     </a>
                     </div>

                     <div className="flex items-center gap-2">
                     <Instagram className="w-4 h-4 text-orange-400" />
                     <a className="hover:text-orange-400"
                      href="https://instagram.com/AcademicHelpUS"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      @AcademicHelpUS
                     </a>
                   </div>
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <h4 className="text-orange-500 font-bold text-sm mb-4">Company</h4>
                <div className="flex flex-col gap-3 text-sm text-gray-400">
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onNavigate?.("about")}
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onNavigate?.("services")}
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onNavigate?.("reviews")}
                  >
                    Reviews
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onNavigate?.("contact")}
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onNavigate?.("order")}
                  >
                    Order now
                  </button>
                </div>
              </div>

              {/* LEGAL */}
              <div>
                <h4 className="text-orange-500 font-bold text-sm mb-4">Legal</h4>
                <div className="flex flex-col gap-3 text-sm text-gray-400">
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onOpenPolicies?.("privacy")}
                  >
                    Privacy Policy
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onOpenPolicies?.("tos")}
                  >
                    Terms of Service
                  </button>
                  <button
                    type="button"
                    className="text-left hover:text-orange-400"
                    onClick={() => onOpenPolicies?.("ethical")}
                  >
                    Ethics Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER + DISCLAIMER */}
        <div className="border-t border-white/10 pt-10 text-center">
          <h3 className="text-orange-500 font-black tracking-[0.35em] text-sm mb-4">
            ACADEMIC DISCLAIMER
          </h3>
          <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Services provided by Academic Help are intended for research assistance, tutoring, and guidance purposes
            only. These materials are not intended to be submitted as original student work. We strictly adhere to
            institutional honor codes and encourage students to ensure all final submissions represent their own
            original efforts and learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
