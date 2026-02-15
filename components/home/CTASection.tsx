"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type Props = {
  onGoServices: () => void;
  onGoOrder?: () => void;
};

export default function CTASection({ onGoServices, onGoOrder  }: Props) {
  const router = useRouter();
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-slate-950 p-12 lg:p-24 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Your Academic <br />
              <span className="text-[#FF6B00]">Breakthrough</span> Awaits.
            </h2>

            <p className="text-slate-400 text-lg">
              Stop worrying about deadlines and start focusing on learning. Our
              experts are ready to assist you today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button"
                onClick={() => router.push("/get-started")} className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>

              <button
                onClick={() => router.push("/services")}
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Success Rate</span>
                <span className="text-green-400 font-bold">99.4%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="w-[99%] h-full bg-[#FF6B00] rounded-full" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">On-time Delivery</span>
                <span className="text-blue-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
