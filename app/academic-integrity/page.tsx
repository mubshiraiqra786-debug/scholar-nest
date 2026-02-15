import AcademicIntegrityPage from "@/components/pages/AcademicIntegrityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Integrity",
  description: "Our academic integrity policy and ethical guidelines for US university students.",
};

export default function Page() {
  return <AcademicIntegrityPage />;
}
