import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

type Props = {
  onGoServices?: () => void;
  onGoOrder?: () => void;
};

export default function HeroHero({ onGoServices, onGoOrder }: Props) {
  return (
    <section className="relative bg-[#F8F7F5] pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF6B00] text-xs font-bold uppercase tracking-widest animate-bounce">
              <Zap size={14} className="fill-current" /> Next-Gen Academic Assistance </div>

            <h1 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">
                Education
              </span>{" "}
              With Expert Guidance.
            </h1>

            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional support tailored to US University syllabi. We bridge
              the gap between effort and excellence with 24/7 specialist
              availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
                type="button"
                onClick={onGoOrder}
                className="px-8 py-3 bg-[#FF6B00] text-white rounded-2xl font-extrabold text-lg hover:bg-[#e66000] shadow-2xl shadow-orange-500/20 transition-all transform hover:-translate-y-1">
                Get Started Now
              </button>

              <button
                type="button"
                onClick={onGoServices}
                className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-extrabold text-lg hover:bg-slate-50 transition-all"
              >
                View Our Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                className="w-full object-cover aspect-[5/6]"
                alt="Students studying"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium">84 Experts Online Now</span>
                </div>
                <p className="text-xl font-bold">
                  {'"The research quality was exactly what my professor expected."'}
                </p>
                <p className="text-sm opacity-80 mt-1">— Sarah J., NYU Student</p>
              </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}
