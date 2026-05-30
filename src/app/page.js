import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDemo from "@/components/sections/LiveDemo";
import Heritage from "@/components/sections/Heritage";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <LiveDemo />
        <Heritage />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
