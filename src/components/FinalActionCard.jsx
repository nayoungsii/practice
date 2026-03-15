const ctaByConcern = {
  '스펙 수준이 적절한지 모르겠어요': '입사 가능성 분석하기',
  '어디서부터 시작해야 할지 모르겠어요': '취업 준비 가이드 보기',
  '지원할 공고를 찾기 어려워요': '맞춤 채용 공고 확인하기',
};

export function FinalActionCard({ concern, status, stage }) {
  const ctaLabel = ctaByConcern[concern] ?? '맞춤 전략 확인하기';

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          분석 완료
        </div>
        <h1 className="mt-6 text-[28px] font-extrabold leading-[1.2] tracking-[-0.04em] text-slate-950">
          지금 바로 시작해보세요
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-slate-500">
          현재 상황과 준비 단계에 맞춰 바로 시작할 수 있는 전략을 정리했어요.
          지금의 고민에 맞는 우선 행동부터 확인해보세요.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-[32px] bg-slate-950 p-6 text-white shadow-[0_24px_46px_rgba(15,23,42,0.22)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-300">맞춤 전략 요약</p>
              <p className="mt-3 text-xl font-bold leading-8 tracking-tight">
                {status}
                <br />
                {stage}
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-slate-200">
              핵심 고민
              <p className="mt-2 max-w-[110px] text-sm font-semibold text-white">{concern}</p>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-white/8 p-4">
            <p className="text-sm leading-6 text-slate-200">
              취팡 AI는 현재 단계에서 바로 실행 가능한 우선순위를 제안하고,
              다음 지원 액션까지 연결해줍니다.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-14 w-full items-center justify-center rounded-full bg-white text-[15px] font-semibold text-slate-950 shadow-[0_18px_34px_rgba(148,163,184,0.22)] ring-1 ring-slate-200 transition hover:-translate-y-0.5"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
