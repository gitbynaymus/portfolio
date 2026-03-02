import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:naymusimran58@gmail.com?subject=Message from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact Me" subtitle="Let's connect and collaborate" />
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary"><Mail size={18} /></div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a href="mailto:naymusimran58@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">naymusimran58@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary"><Phone size={18} /></div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <a href="tel:+8801780088508" className="text-sm font-medium text-foreground hover:text-primary transition-colors">+880 1780088508</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary"><Linkedin size={18} /></div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <a href="https://linkedin.com/in/naymusimran58" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">linkedin.com/in/naymusimran58</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary"><Github size={18} /></div>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <a href="https://github.com/gitbynaymus" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">github.com/gitbynaymus</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
