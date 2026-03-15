function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-[24px] border border-white/70 bg-white/90 shadow-[0_18px_34px_rgba(148,163,184,0.16)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function ListingsVisual() {
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50 p-4">
      <div className="mb-3 h-11 rounded-2xl bg-white px-4 shadow-sm animate-search-sweep">
        <div className="flex h-full items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-slate-200" />
          <div className="h-3 w-28 rounded-full bg-slate-200" />
        </div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className={`p-4 transition ${
              item === 1 ? 'animate-card-stack-1' : ''
            } ${item === 2 ? 'translate-x-3 rotate-[-2deg] animate-card-stack-2' : ''} ${
              item === 3 ? 'animate-card-stack-3' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="h-3 w-16 rounded-full bg-emerald-100" />
                <div className="mt-3 h-4 w-32 rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-24 rounded-full bg-slate-100" />
              </div>
              <div className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">
                고민 중
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 rounded-2xl bg-slate-950 px-4 py-3 text-xs font-semibold text-white shadow-xl animate-badge-bounce">
        나와 맞는 공고 찾기
      </div>
    </div>
  );
}

function CompareVisual() {
  return (
    <div className="grid h-[260px] grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-[28px] bg-gradient-to-br from-rose-50 via-white to-slate-100 p-4">
      <Card className="p-4 animate-panel-left">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-slate-200" />
          <div className="space-y-2">
            <div className="h-3 w-16 rounded-full bg-slate-300" />
            <div className="h-3 w-20 rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-3 w-full rounded-full bg-slate-100" />
          <div className="h-3 w-5/6 rounded-full bg-slate-100" />
          <div className="h-3 w-4/6 rounded-full bg-slate-100" />
        </div>
      </Card>
      <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-500 shadow-sm animate-compare-pulse">
        비교
      </div>
      <Card className="p-4 animate-panel-right">
        <div className="h-4 w-20 rounded-full bg-emerald-100" />
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded-full bg-slate-200" />
            <div className="h-2 w-12 rounded-full bg-emerald-300 animate-progress-scan" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-3 w-12 rounded-full bg-slate-200" />
            <div className="h-2 w-10 rounded-full bg-amber-300 animate-progress-scan" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-3 w-14 rounded-full bg-slate-200" />
            <div className="h-2 w-8 rounded-full bg-rose-300 animate-progress-scan" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="h-[260px] rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-amber-50 p-4">
      <div className="rounded-[22px] bg-white p-3 shadow-sm animate-search-sweep">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-slate-200" />
          <div className="h-3 w-28 rounded-full bg-slate-200" />
        </div>
        <div className="mt-3 flex gap-2">
          {['마케팅', '서울', '신입'].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className={`p-4 ${item === 1 ? 'animate-list-scroll-1' : ''} ${
              item === 2 ? 'animate-list-scroll-2' : ''
            } ${item === 3 ? 'animate-list-scroll-3' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-14 rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-32 rounded-full bg-slate-100" />
              </div>
              <div className="h-8 w-8 rounded-2xl bg-slate-100" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-800 p-5 text-white">
      <div className="rounded-[24px] bg-white/10 p-4 backdrop-blur animate-float-slow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-emerald-200">맞춤 전략</p>
            <p className="mt-2 text-lg font-bold">지원 우선순위 추천</p>
          </div>
          <div className="rounded-full bg-emerald-300/20 px-3 py-1 text-[11px] font-semibold text-emerald-100">
            AI 분석 완료
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-white/8 p-3">
            <div className="h-3 w-24 rounded-full bg-white/20" />
            <div className="mt-3 h-2 w-full rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-emerald-300 animate-bar-grow" />
            </div>
          </div>
          <div className="rounded-2xl bg-white/8 p-3">
            <div className="h-3 w-20 rounded-full bg-white/20" />
            <div className="mt-3 h-2 w-full rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-sky-300 animate-bar-grow" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-2 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl animate-pulse-soft" />
      <div className="absolute -top-5 -left-3 h-20 w-20 rounded-full bg-white/10 blur-2xl animate-float-slow" />
    </div>
  );
}

export function IntroVisual({ type }) {
  if (type === 'compare') return <CompareVisual />;
  if (type === 'search') return <SearchVisual />;
  if (type === 'strategy') return <StrategyVisual />;
  return <ListingsVisual />;
}
