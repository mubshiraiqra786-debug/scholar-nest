"use client";

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "@/components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import ServicesSection from "../components/home/ServicesSection";
import HowItWorks from "../components/home/HowItWorks";
import CTASection from "../components/home/CTASection";

import ServicesPage from "../components/pages/ServicesPage";
import AboutUsPage from "../components/pages/AboutUsPage";
import ContactPage from "../components/pages/ContactPage";
import AcademicIntegrityPage from "../components/pages/AcademicIntegrityPage";
import ReviewsPage from "../components/pages/ReviewsPage";
import OrderNowPage from "../components/pages/OrderNowPage";
import PoliciesPage from "../components/pages/PoliciesPage";


export default function Page() {
  const [page, setPage] = useState("home");
  const [policySection, setPolicySection] = useState<"tos"|"ethical"|"privacy"|"cookie">("tos");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  const scrollToSection = (id: string) => {
    // pehle home render ensure karo
    setPage("home");
  
    // next tick me scroll (taake section DOM me aa jaye)
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
  
      const headerOffset = 90; // navbar height approx
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 50);
  };
  
  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <main>
            <Hero onGoServices={() => setPage("services")} 
              onGoOrder={() => setPage("order")}/>
            <TrustBadges />
            <ServicesSection onGoServices={() => setPage("services")} />
            <section id="how-it-works">
              <HowItWorks />
            </section>
            <CTASection onGoServices={() => setPage("services")}
            onGoOrder={() => setPage("order")}  />
          </main>
        );

      case "services":
        return <ServicesPage />;

      case "contact":
        return <ContactPage />;

      case "academic-integrity":
        return   <AcademicIntegrityPage
        onContact={() => setPage("contact")}
      />;

      case "reviews":
        return <ReviewsPage />;

      case "about":
        return <AboutUsPage />;

      case "order":
        return <OrderNowPage />;

      case "policies":
        return <PoliciesPage initialSection={policySection} />;

      default:
        return <Hero 
        onGoServices={() => setPage("services")}
        onGoOrder={() => setPage("order")} 
          />;
    }
  };

  return (
    <div className="selection:bg-orange-100 selection:text-orange-900 bg-white min-h-screen">
     <Navbar activePage={page} setPage={setPage} onScrollToSection={scrollToSection} />
      {renderContent()}
      <Footer
  onNavigate={(p) => setPage(p)}
  onOpenPolicies={(section) => {
    setPolicySection(section);
    setPage("policies");
  }}
/>
    </div>
  );
}
