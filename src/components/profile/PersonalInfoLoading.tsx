interface PersonalInfoLoadingProps {
  label: string;
}

export default function PersonalInfoLoading({
  label,
}: PersonalInfoLoadingProps) {
  return (
    <section className="animate-pulse rounded-3xl border border-white/10 bg-slate-950/40 px-6 py-6">
      <div className="h-4 w-1/3 rounded-full bg-white/20" />
      <div className="mt-6 space-y-3">
        <div className="h-3 w-full rounded-full bg-white/10" />
        <div className="h-3 w-11/12 rounded-full bg-white/10" />
        <div className="h-3 w-10/12 rounded-full bg-white/10" />
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
    </section>
  );
}
