"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Clock,
  Globe,
  Lock,
  MessageSquare,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ✅ Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  // ✅ UX state
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(
    null
  );

  const faqs = [
    {
      q: "Is my identity kept confidential?",
      a: "Absolutely. We use end-to-end encryption for all communications. Your personal information and university affiliation are never shared with third parties or your institution.",
    },
    {
      q: "What is the typical turnaround time?",
      a: "Most inquiries are handled within 2-4 hours during business hours. For complex academic requests, we provide a detailed timeline within the first 6 hours.",
    },
    {
      q: "How do you ensure academic integrity?",
      a: "Our services are strictly for tutoring and model assistance. We provide original materials and guidance designed to help you learn and produce your own unique work, following all major US university codes of conduct.",
    },
  ];

  // ✅ Submit handler -> calls /api/contact (your SendGrid route)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill Full Name, Email, and Message." });
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, category, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Send failed");
      }

      setStatus({ type: "success", text: "Request submitted! We’ll contact you shortly." });

      // reset
      setFullName("");
      setEmail("");
      setCategory("General Inquiry");
      setMessage("");
    } catch (err: any) {
      setStatus({
        type: "error",
        text: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Contact & Support Center
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Professional academic assistance with institutional trust. We prioritize your
            confidentiality and academic success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-orange-50 p-2 rounded-lg">
                  <MessageSquare className="text-[#FF6B00] w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@university.edu"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Inquiry Category
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 appearance-none cursor-pointer transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Project Update</option>
                      <option>Billing Question</option>
                      <option>Ethics & Integrity</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                  />
                </div>

                {status && (
                  <div
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-semibold",
                      status.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    )}
                  >
                    {status.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full md:w-auto px-10 py-4 bg-[#FF6B00] text-white font-bold rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Submit Request"}
                </button>

                <p className="text-[10px] text-slate-400 italic">
                  By submitting, you agree to our confidentiality and privacy protocols.
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900">Support Status</h3>
                <div className="flex items-center gap-2 px-2 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live
                  Now
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-orange-500 w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Operating Hours</p>
                    <p className="text-xs text-slate-500">
                      9:00 AM — 9:00 PM EST
                      <br />
                      Monday — Friday
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="text-orange-500 w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Response Time</p>
                    <p className="text-xs text-slate-500">Current average: &lt; 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F7F5] rounded-[2rem] p-8 border border-slate-100">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-6">
                Trust & Security
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, label: "SSL Secure" },
                  { icon: Shield, label: "FERPA Ready" },
                  { icon: Users, label: "Anonymous" },
                  { icon: Globe, label: "US Based" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <item.icon className="w-4 h-4 text-orange-800" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">Clarifying our commitment to privacy and quality.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition-all"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-400 transition-transform duration-300",
                      openFaq === idx && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "px-8 overflow-hidden transition-all duration-300",
                    openFaq === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
