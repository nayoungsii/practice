export function OptionCard({ title, selected, onClick, description }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group w-full rounded-[28px] border p-5 text-left transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-slate-950/10',
        selected
          ? 'border-slate-950 bg-slate-950 text-white shadow-[0_16px_40px_rgba(15,23,42,0.22)]'
          : 'border-white/70 bg-white text-slate-900 shadow-[0_10px_30px_rgba(148,163,184,0.16)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(148,163,184,0.2)]',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[15px] font-semibold leading-6 tracking-tight">{title}</p>
          {description ? (
            <p
              className={[
                'mt-2 text-sm leading-5',
                selected ? 'text-slate-200' : 'text-slate-500',
              ].join(' ')}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div
          className={[
            'mt-1 flex h-6 w-6 items-center justify-center rounded-full border transition-colors',
            selected
              ? 'border-white bg-white text-slate-950'
              : 'border-slate-300 bg-slate-50 text-transparent group-hover:border-slate-400',
          ].join(' ')}
        >
          <span className="text-sm">✓</span>
        </div>
      </div>
    </button>
  );
}
