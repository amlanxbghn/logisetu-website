import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { FaTeamspeak } from "react-icons/fa6";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
