import AboutUsPage from "@/components/pages/AboutUsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Scholar Nest — our mission, values, and ethical academic consulting approach for US university students.",
};

export default function Page() {
  return <AboutUsPage />;
}
