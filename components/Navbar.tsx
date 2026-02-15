"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavItem = { name: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "About Us", href: "/about" },
      { name: "Academic Integrity", href: "/academic-integrity" },
      { name: "Reviews", href: "/reviews" },
    ],
    []
  );

  const isActive = (href: string) => {
    // exact match for routes
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled || pathname !== "/"
          ? "bg-white/90 backdrop-blur-md py-3 border-gray-200 shadow-sm"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-1 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/scholar-nest-icon.png"
            alt="Scholar Nest"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Scholar <span className="text-[#FF6B00]">Nest</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors",
                isActive(item.href)
                  ? "text-[#FF6B00]"
                  : "text-slate-600 hover:text-[#FF6B00]"
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="h-6 w-[1px] bg-slate-200 mx-2" />

          <Link
            href="/contact"
            className={cn(
              "text-sm font-bold px-4 py-2 rounded-full transition-colors",
              pathname === "/contact"
                ? "text-[#FF6B00] bg-orange-50"
                : "text-slate-900 hover:bg-slate-50"
            )}
          >
            Contact Us
          </Link>

          <Link
            href="/order"
            className="bg-[#FF6B00] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#e66000] shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileMenu((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className={cn(
                "w-full text-left py-3 px-2 rounded-lg font-semibold transition-colors",
                isActive(item.href)
                  ? "text-[#FF6B00] bg-orange-50"
                  : "text-slate-800 hover:bg-slate-50"
              )}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="w-full py-4 text-center text-slate-900 border border-slate-200 rounded-xl font-bold"
          >
            Contact Us
          </Link>

          <Link
            href="/order"
            onClick={() => setMobileMenu(false)}
            className="bg-[#FF6B00] text-white text-center text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#e66000] shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
