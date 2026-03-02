import { Github, Linkedin, Mail,Facebook } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen  flex items-center pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="section-container">
        <div className="grid  lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              MD. Imran <span className="gradient-text">Hossain</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-medium">
              AI & Machine Learning Research Enthusiast | Frontend Developer
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Computer Science student passionate about multimodal AI research
              and intelligent system design. Building scalable digital systems
              while preparing for advanced research in AI & Machine Learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("research")}
                className="px-6 py-3 rounded-full font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Research
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-full font-medium text-sm border border-border bg-card text-foreground hover:bg-muted transition-colors"
              >
                View Projects
              </button>
            </div>

            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/gitbynaymus"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/naymusimran58"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:naymusimran58@gmail.com"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://web.facebook.com/naymusimran"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative ">
              <div className="absolute inset-0 rounded-full glow-effect scale-110 animate-float" />
              <img
                src={profilePhoto}
                alt="MD. Imran Hossain - AI & ML Research Enthusiast"
                className="relative w-64 h-64 sm:py-100 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-background shadow-xl"
                loading="eager"
              />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
