import type { Metadata } from "next";
import PoliciesPage from "@/components/pages/PoliciesPage";

export const metadata: Metadata = {
  title: "Ethics Policy",
  description: "Ethics Policy for Scholar Nest.",
};

export default function EthicsPolicyPage() {
  return <PoliciesPage initialSection="ethical" />;
}
