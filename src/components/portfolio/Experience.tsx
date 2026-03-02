import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "NextTech Limited",
    period: "February 2026 – Present",
    items: [
      "Develop responsive and scalable interfaces",
      "Collaborate with backend developers",
      "Build production-ready UI components",
      "Optimize performance and UX",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Upwork",
    period: "1 Month",
    items: [
      "Completed small client-based web tasks",
      "Practiced professional client communication",
      "Gained freelancing workflow experience",
    ],
  },
];

const Experience = () => (
  <SectionWrapper id="experience">
    <SectionTitle title="Experience" subtitle="Professional journey so far" />
    <div className="max-w-3xl mx-auto space-y-0">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
          <div className="card-glass p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company} · {exp.period}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              {exp.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
