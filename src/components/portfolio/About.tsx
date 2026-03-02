import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const infoCards = [
  { icon: GraduationCap, label: "CGPA", value: "3.76" },
  { icon: Award, label: "VC Award", value: "2×" },
  { icon: Award, label: "Dean Award", value: "3×" },
  { icon: Briefcase, label: "Intern", value: "NextTech Ltd" },
  { icon: BookOpen, label: "Research", value: "Multimodal AI" },
];

const About = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Get to know my background and passion" />
    <div className="grid lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-3">
        <p className="text-muted-foreground leading-relaxed text-base">
 I am a Computer Science and Engineering student at Green University of Bangladesh with strong academic performance (CGPA 3.76) and a deep interest in Artificial Intelligence and Machine Learning. I combine research-driven learning with hands-on web development experience and am currently expanding my skills in the MERN stack.
<br />
<br />
Currently, I am working as a Frontend Developer Intern at NextTech Limited, contributing to scalable web interfaces and collaborating in team-based production systems. My long-term goal is to pursue higher education and conduct impactful research in AI and intelligent systems.
        </p>
      </div>
      <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
        {infoCards.map((c) => (
          <div
            key={c.label}
            className="card-glass p-4 text-center hover:scale-105 transition-transform duration-200"
          >
            <c.icon size={22} className="mx-auto text-primary mb-2" />
            <p className="text-xs text-muted-foreground">{c.label}</p>
            <p className="font-display font-bold text-foreground mt-0.5">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
