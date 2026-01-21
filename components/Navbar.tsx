"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  activePage: string;
  setPage: (p: string) => void;
  onScrollToSection?: (id: string) => void;
};

export default function Navbar({ activePage, setPage, onScrollToSection }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Academic Integrity", id: "academic-integrity" },
    { name: "Reviews", id: "reviews" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenu(false);

    if (id === "how-it-works") {
      if (activePage !== "home") setPage("home");
      setTimeout(() => onScrollToSection?.("how-it-works"), 0);
      return;
    }

    setPage(id);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled || activePage !== "home"
          ? "bg-white/90 backdrop-blur-md py-3 border-gray-200 shadow-sm"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-1 flex justify-between items-center">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <div className="bg-[#FF6B00] p-1.5 rounded-lg transform transition-transform group-hover:rotate-12">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Scholar <span className="text-[#FF6B00]">Nest</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "text-sm font-semibold transition-colors",
                activePage === item.id
                  ? "text-[#FF6B00]"
                  : "text-slate-600 hover:text-[#FF6B00]"
              )}
            >
              {item.name}
            </button>
          ))}

          <div className="h-6 w-[1px] bg-slate-200 mx-2" />

          <button
            onClick={() => handleNavClick("contact")}
            className={cn(
              "text-sm font-bold px-4 py-2 rounded-full transition-colors",
              activePage === "contact"
                ? "text-[#FF6B00] bg-orange-50"
                : "text-slate-900 hover:bg-slate-50"
            )}
          >
            Contact Us
          </button>

          <button
            onClick={() => setPage("order")}
            className="bg-[#FF6B00] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#e66000] shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileMenu((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {/* Mobile nav links */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "w-full text-left py-3 px-2 rounded-lg font-semibold transition-colors",
                activePage === item.id
                  ? "text-[#FF6B00] bg-orange-50"
                  : "text-slate-800 hover:bg-slate-50"
              )}
            >
              {item.name}
            </button>
          ))}


          <button
            onClick={() => handleNavClick("contact")}
            className="w-full py-4 text-slate-900 border border-slate-200 rounded-xl font-bold"
          >
            Contact Us
          </button>

          {/* Get Started - keep EXACT style */}
          <button
            onClick={() => {
              setPage("order");
              setMobileMenu(false);
            }}
            className="bg-[#FF6B00] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#e66000] shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
