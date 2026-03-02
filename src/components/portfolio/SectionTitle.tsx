interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="mb-12 text-center">
    <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text inline-block">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;
