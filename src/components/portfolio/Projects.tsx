import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const Projects = () => (
  <SectionWrapper id="projects" className="bg-muted/30">
    <SectionTitle
      title="Projects"
      subtitle="Selected work showcasing my skills"
    />
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Featured */}
      <div className="md:col-span-2 card-glass p-6 sm:p-8 border-t-4 border-t-primary">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          Featured Project
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
          FlexFlow – Intelligent Freelance Platform
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          AI-powered freelance platform addressing recruiter fatigue and
          freelancer inequality using intelligent task matching and
          fairness-based distribution model.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Intelligent System Architecture",
            "Algorithmic Task Matching",
            "Fairness Modeling",
            "Team Collaboration",
          ].map((s) => (
            <span key={s} className="tag-chip">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border bg-card text-foreground hover:bg-muted transition-colors"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>

      {/* Second project */}
      {/* <div className="md:col-span-2 lg:col-span-1 card-glass p-6">
        <h3 className="font-display text-lg font-bold text-foreground">Go-Desh Tour & Travel</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Full-stack travel management system with role-based dashboards (Admin, Guide, Tourist) and real-world workflow implementation.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"].map((t) => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="https://godesh.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={14} /> godesh.vercel.app
          </a>
        </div>
      </div> */}

      <div className="md:col-span-2 lg:col-span-1 card-glass p-6">
        <h3 className="font-display text-lg font-bold text-foreground">
          Go-Desh Tour & Travel
        </h3>

        {/* Paragraph */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Full-stack travel management system with role-based dashboards (Admin,
          Guide, Tourist) and real-world workflow implementation.
        </p>

        {/* Image Below Paragraph */}
        <img
          src="/godesh-preview.png" // keep image inside public folder
          alt="Go-Desh Tour Project Preview"
          className="mt-4 w-full rounded-lg object-cover shadow-md"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
          ].map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href="https://godesh.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={14} /> godesh.vercel.app
          </a>
        </div>
      </div>
      {/* 3rd project */}
      <div className="md:col-span-2 lg:col-span-1 card-glass p-6">
        <h3 className="font-display text-lg font-bold text-foreground">
          Go-Desh Tour & Travel
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Full-stack travel management system with role-based dashboards (Admin,
          Guide, Tourist) and real-world workflow implementation.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
          ].map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="https://godesh.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={14} /> godesh.vercel.app
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Projects;
