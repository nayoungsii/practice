import { IntroVisual } from './visuals/IntroVisual';

export function OnboardingIntroSlide({
  slide,
  index,
  total,
  onNext,
  onPrev,
}) {
  const isLast = index === total - 1;

  return (
    <section className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100 backdrop-blur">
          {index + 1} / {total}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={[
                'h-2 rounded-full transition-all duration-300',
                dotIndex === index ? 'w-6 bg-slate-950' : 'w-2 bg-slate-300',
              ].join(' ')}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex-1">
        <div className="rounded-[32px] bg-gradient-to-br from-white via-white to-slate-100 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/80">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                AI 취업 전략
              </span>
              <h1 className="mt-4 text-[30px] font-extrabold leading-[1.18] tracking-[-0.04em] text-slate-950">
                {slide.headline}
              </h1>
            </div>
          </div>
          <p className="max-w-[280px] text-[15px] leading-6 text-slate-500">
            {slide.subtext}
          </p>
          <div className="mt-8">
            <IntroVisual type={slide.visual} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {index > 0 ? (
          <button
            type="button"
            onClick={onPrev}
            className="h-14 w-14 shrink-0 rounded-full bg-white text-lg font-semibold text-slate-600 shadow-[0_12px_24px_rgba(148,163,184,0.2)] ring-1 ring-slate-200 transition hover:-translate-y-0.5"
          >
            ←
          </button>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          className="flex h-14 flex-1 items-center justify-center rounded-full bg-slate-950 px-6 text-[15px] font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.24)] transition hover:-translate-y-0.5"
        >
          {isLast ? '내 취업 전략 확인하기' : '다음'}
        </button>
      </div>
    </section>
  );
}
