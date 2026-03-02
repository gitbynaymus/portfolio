import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const techs = ["Python", "PyTorch", "BERT", "Scikit-learn", "KNN", "NumPy", "Pandas", "Matplotlib"];

const Research = () => (
  <SectionWrapper id="research" className="bg-muted/30">
    <SectionTitle title="Research & Thesis" subtitle="Current academic research work" />
    <div className="card-glass p-6 sm:p-8 border-l-4 border-l-primary max-w-4xl mx-auto">
      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">Undergraduate Thesis</p>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
        Margin-Based Multimodal Representation Learning for Robust Document Classification
      </h3>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
        <span>Expected: 2026</span>
        <span>Supervisor: MS Babe Sultana</span>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Problem Statement</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Design a robust document classification system integrating text, image, and layout features to handle unseen document types.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Contributions</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Developed margin-based multimodal learning framework</li>
            <li>Implemented KNN-based uncertainty-aware rejection mechanism</li>
            <li>Improved robustness over traditional text-only models</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {techs.map((t) => (
          <span key={t} className="tag-chip">{t}</span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Research;
