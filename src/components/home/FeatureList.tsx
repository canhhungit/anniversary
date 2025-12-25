interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface FeatureListProps {
  title: string;
  description: string;
  items: FeatureItem[];
}

export function FeatureList({ title, description, items }: FeatureListProps) {
  return (
    <section
      id="features"
      className="rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-10 shadow-inner"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="text-sm text-slate-300 sm:text-base">{description}</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/5 bg-slate-900/80 px-5 py-6 text-left shadow-lg shadow-sky-500/5 transition hover:border-sky-300/60 hover:shadow-sky-500/10"
          >
            <span className="text-2xl" aria-hidden>
              {feature.icon}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
