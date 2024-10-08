import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import BusinessModel from "@/components/BusinessModel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BusinessModel />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
