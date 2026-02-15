import type { Metadata } from "next";
import PoliciesPage from "@/components/pages/PoliciesPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Scholar Nest.",
};

export default function TermsOfServicePage() {
  return <PoliciesPage initialSection="tos" />;
}
