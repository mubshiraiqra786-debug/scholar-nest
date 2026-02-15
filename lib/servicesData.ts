// lib/servicesData.ts

import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Briefcase,
  BookOpen,
  GraduationCap,
  Target,
  Presentation,
} from "lucide-react";

export type ServiceItem = {
  slug: string;              // used for /services#slug anchors
  title: string;
  icon: LucideIcon;          // lucide icon component
  short: string;             // Home page preview (short)
  long: string;              // /services full page (detailed)
};

export const services: ServiceItem[] = [
  {
    slug: "editing-proofreading",
    title: "Editing & Proofreading",
    icon: FileText,
    short:
      "Refine your academic voice with expert focus on clarity, structural flow, and precise citation accuracy.",
    long:
      "Refine your academic voice with expert focus on clarity, structural flow, and precise citation accuracy (APA, MLA, Chicago). Our editors ensure your arguments are persuasive and professionally presented.",
  },
  {
    slug: "business-writing",
    title: "Business Writing",
    icon: Briefcase,
    short:
      "Strategic assistance for MBA reports, complex case studies, and corporate communication projects.",
    long:
      "Strategic assistance for MBA reports, complex case studies, and corporate communication projects. We bridge the gap between academic theory and real-world professional standards for executive-level quality.",
  },
  {
    slug: "coursework-help",
    title: "Coursework Help",
    icon: BookOpen,
    short:
      "Guided research methodology and strategic support for complex undergraduate and postgraduate modules.",
    long:
      "Guided research methodology and strategic support for complex undergraduate and postgraduate modules. Receive mentorship on quantitative analysis, literature reviews, and subject-specific rigor.",
  },
  {
    slug: "dissertation-consulting",
    title: "Dissertation Consulting",
    icon: GraduationCap,
    short:
      "End-to-end consulting for PhD candidates, from proposal feedback to defense preparation within ethical boundaries.",
    long:
      "End-to-end consulting for PhD candidates. We provide high-level feedback on proposal development, data interpretation, and final defense preparation while maintaining complete ethical boundaries.",
  },
  {
    slug: "admissions-strategy",
    title: "Admissions Strategy",
    icon: Target,
    short:
      "Strengthen personal statements and graduate applications to stand out in competitive US university admissions.",
    long:
      "Perfect your personal statements and graduate school applications. Our consultants help you highlight your unique academic journey to stand out in competitive US university admission pools.",
  },
  {
    slug: "presentation-design",
    title: "Presentation Design",
    icon: Presentation,
    short:
      "Clean, professional slides to communicate research findings and complex data clearly for academic settings.",
    long:
      "Visual storytelling for your research. We design clean, professional slides that effectively communicate complex data and findings for symposiums and thesis defenses.",
  },
];
