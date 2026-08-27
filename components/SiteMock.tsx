const SiteMock = () => {
  return (
    <div className="relative mx-auto w-full max-w-md rotate-1">
      <div className="rounded-2xl bg-dark-bg-subtle p-2 shadow-xl">
        <div className="flex items-center gap-1.5 px-2 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
          <span className="ml-3 flex-1 h-5 rounded-full bg-white/10 max-w-[180px] font-mono text-[10px] text-dark-text-muted flex items-center px-3">
            tunegocio.com
          </span>
        </div>
        <div className="rounded-xl bg-surface overflow-hidden">
          <div className="bg-primary px-5 py-6">
            <div className="h-3 w-20 rounded-full bg-white/30 mb-3" />
            <div className="h-5 w-40 rounded-md bg-white/90 mb-2" />
            <div className="h-3 w-28 rounded-full bg-white/40 mb-4" />
            <div className="h-8 w-32 rounded-[10px] bg-secondary" />
          </div>
          <div className="p-5 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border p-2">
                <div className="h-8 w-8 rounded-md bg-primary-light mb-2" />
                <div className="h-2 w-full rounded-full bg-bg-subtle mb-1.5" />
                <div className="h-2 w-2/3 rounded-full bg-bg-subtle" />
              </div>
            ))}
          </div>
          <div className="px-5 pb-5">
            <div className="rounded-lg bg-accent-soft border border-accent/20 p-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-accent/40" />
              <div className="h-6 w-16 rounded-md bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMock;
