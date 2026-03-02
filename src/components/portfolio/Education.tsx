import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const education = [
  { school: "Green University of Bangladesh", degree: "BSc in CSE", period: "2022 – Present", grade: "CGPA: 3.76" },
  { school: "Bheramara Govt College", degree: "HSC · Jessore Board", period: "", grade: "GPA: 4.50" },
  { school: "Bheramara Pilot Model High School", degree: "SSC · Jessore Board", period: "", grade: "GPA: 5.00" },
];

const Education = () => (
  <SectionWrapper id="education" className="bg-muted/30">
    <SectionTitle title="Education" subtitle="My academic journey" />
    <div className="max-w-3xl mx-auto space-y-0">
      {education.map((ed, i) => (
        <div key={i} className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
          <div className="card-glass p-5">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-foreground">{ed.school}</h3>
                <p className="text-sm text-muted-foreground">{ed.degree}{ed.period && ` · ${ed.period}`}</p>
                <p className="text-sm font-semibold text-primary mt-1">{ed.grade}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Education;
