import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Research from "@/components/portfolio/Research";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Awards from "@/components/portfolio/Awards";
import Vision from "@/components/portfolio/Vision";
import Contact from "@/components/portfolio/Contact";
import BackToTop from "@/components/portfolio/BackToTop";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Awards />
      <Vision />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
