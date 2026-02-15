import ReviewsPage from "@/components/pages/ReviewsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Student reviews and testimonials for Scholar Nest academic consulting services.",
};

export default function Page() {
  return <ReviewsPage />;
}
