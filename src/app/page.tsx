import CTASection from "../../components/CTASection";
import Faq from "../../components/Faq";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import TrustSection from "../../components/TrustSection";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <TrustSection/>
        <Features />
        <HowItWorks/>
        <Faq />
        <CTASection />
        <Footer/>
      </main>
    </>
  );
}
