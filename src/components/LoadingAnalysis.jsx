export function LoadingAnalysis({ progress, message }) {
  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <div className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(15,23,42,0.18)]">
          AI 전략 생성
        </div>
        <h1 className="mt-6 text-[28px] font-extrabold leading-[1.2] tracking-[-0.04em] text-slate-950">
          AI가 당신의 취업 전략을
          <br />
          분석 중이에요
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-slate-500">
          취팡의 취업 데이터를 기반으로 맞춤 전략을 찾고 있습니다.
        </p>
      </div>

      <div className="mt-10 rounded-[32px] bg-white p-6 shadow-[0_18px_40px_rgba(148,163,184,0.16)] ring-1 ring-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">{message}</p>
            <p className="mt-1 text-sm text-slate-400">정확도 높은 전략을 정리하고 있어요</p>
          </div>
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 border-r-emerald-300 animate-spin"
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-950">
              {progress}%
            </div>
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-900 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {['준비 상태', '기업 탐색', '전략 생성'].map((item, index) => {
            const isDone = progress >= (index + 1) * 30;
            return (
              <div
                key={item}
                className={[
                  'rounded-2xl p-3 text-center text-xs font-semibold transition-all duration-500',
                  isDone
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-slate-50 text-slate-400',
                ].join(' ')}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
