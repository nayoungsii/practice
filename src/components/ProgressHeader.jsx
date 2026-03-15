const stepLabels = ['고민 선택', '상황 확인', '준비 상태', '전략 분석', '시작하기'];

export function ProgressHeader({ currentStep }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
        <span>취팡 온보딩</span>
        <span>{currentStep}/5 단계</span>
      </div>
      <div className="flex gap-2">
        {stepLabels.map((label, index) => {
          const isActive = index < currentStep;
          return (
            <div key={label} className="flex-1">
              <div
                className={[
                  'h-2 rounded-full transition-all duration-500',
                  isActive
                    ? 'bg-slate-950 shadow-[0_6px_20px_rgba(15,23,42,0.16)]'
                    : 'bg-slate-200',
                ].join(' ')}
              />
              <p className="mt-2 text-center text-[10px] font-medium tracking-tight text-slate-400">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
