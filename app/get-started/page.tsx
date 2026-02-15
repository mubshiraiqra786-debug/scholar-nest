import OrderNowPage from "@/components/pages/OrderNowPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Start your order with Scholar Nest academic consulting.",
};

export default function Page() {
  return <OrderNowPage />;
}
