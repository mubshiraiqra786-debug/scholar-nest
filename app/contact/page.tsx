import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Scholar Nest support for academic consulting inquiries.",
};

export default function Page() {
  return <ContactPage />;
}
