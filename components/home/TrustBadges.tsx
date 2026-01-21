import React from "react";
import { Clock, GraduationCap, Shield } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="bg-white py-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-center gap-6">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center shrink-0">
            <Clock className="text-[#FF6B00] w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              On-time Delivery
            </h3>
            <p className="text-slate-500">Always meeting deadlines</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center shrink-0">
            <GraduationCap className="text-[#FF6B00] w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              US Academic Standards
            </h3>
            <p className="text-slate-500">Qualified experts only</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center shrink-0">
            <Shield className="text-[#FF6B00] w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              100% Confidential
            </h3>
            <p className="text-slate-500">Your privacy is guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
