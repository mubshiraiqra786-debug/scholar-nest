import type { Metadata } from "next";
import PoliciesPage from "@/components/pages/PoliciesPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Scholar Nest.",
};

export default function PrivacyPolicyPage() {
  return <PoliciesPage initialSection="privacy" />;
}
