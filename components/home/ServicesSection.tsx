"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/lib/servicesData";

export default function ServicesSection() {
  const topServices = services.slice(0, 3); // home par 3 cards

  return (
    <section className="py-24 bg-[#F8F7F5]" id="services">
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
          {topServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all text-left"
            >
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-[#FF6B00] w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.short}
              </p>

              {/* ✅ Proper link (no onGoServices state) */}
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center text-[#FF6B00] font-bold text-sm hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Optional: View all */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-white font-bold hover:opacity-90 transition"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
