import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const categories = [
  { title: "Programming", skills: ["C", "C++", "Java", "Python", "JavaScript"] },
  { title: "AI & ML", skills: ["PyTorch", "BERT", "Scikit-learn", "KNN", "Multimodal Learning"] },
  { title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "DaisyUI", "React"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "LaTeX"] },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {categories.map((cat) => (
        <div key={cat.title} className="card-glass p-5">
          <span className="inline-block px-3 py-1 rounded-full  font-semibold bg-primary/20 text-primary border border-primary/90 mb-4">
            {cat.title}
          </span>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span key={s} className="tag-chip">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
