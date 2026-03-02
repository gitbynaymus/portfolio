import { Award, Medal } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const awards = [
  { icon: Award, title: "VC Award", desc: "Awarded Twice for Academic Excellence" },
  { icon: Award, title: "Dean Award", desc: "Awarded Three Times for Academic Excellence" },
  { icon: Medal, title: "ML Bootcamp Certificate", desc: "Machine Learning Bootcamp – 2025" },
];

const Awards = () => (
  <SectionWrapper id="awards">
    <SectionTitle title="Awards & Certifications" />
    <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {awards.map((a) => (
        <div key={a.title} className="card-glass p-6 text-center hover:scale-105 transition-transform duration-200">
          <a.icon size={28} className="mx-auto text-primary mb-3" />
          <h3 className="font-display font-bold text-foreground">{a.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Awards;
