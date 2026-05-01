import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-bg selection:bg-neon-purple/30 selection:text-white">
      <CustomCursor />
      <LoadingScreen />
      <EasterEgg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

