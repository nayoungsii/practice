import { useEffect, useMemo, useState } from 'react';
import {
  concernOptions,
  introSlides,
  loadingMessages,
  stageOptions,
  statusOptions,
} from './data/onboarding';
import { FinalActionCard } from './components/FinalActionCard';
import { LoadingAnalysis } from './components/LoadingAnalysis';
import { OnboardingIntroSlide } from './components/OnboardingIntroSlide';
import { OptionCard } from './components/OptionCard';
import { ProgressHeader } from './components/ProgressHeader';
import { ScreenShell } from './components/ScreenShell';

const FORM_STEPS = {
  concern: 4,
  status: 5,
  stage: 6,
  loading: 7,
  result: 8,
};

function App() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [answers, setAnswers] = useState({
    concern: '',
    status: '',
    stage: '',
  });
  const [progress, setProgress] = useState(12);
  const [messageIndex, setMessageIndex] = useState(0);

  const progressStep = useMemo(() => {
    if (step === FORM_STEPS.concern) return 1;
    if (step === FORM_STEPS.status) return 2;
    if (step === FORM_STEPS.stage) return 3;
    if (step === FORM_STEPS.loading) return 4;
    if (step >= FORM_STEPS.result) return 5;
    return 0;
  }, [step]);

  // 화면 전환 시 짧은 페이드/슬라이드 아웃 후 다음 스텝을 표시한다.
  const transitionTo = (nextStep) => {
    setVisible(false);
    window.setTimeout(() => {
      setStep(nextStep);
      setVisible(true);
    }, 180);
  };

  const updateAnswer = (key, value) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  useEffect(() => {
    if (step !== FORM_STEPS.loading) {
      return undefined;
    }

    // AI 분석 화면은 짧은 시뮬레이션으로 진행률과 상태 문구를 함께 업데이트한다.
    setProgress(12);
    setMessageIndex(0);

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 8, 100);
        return next;
      });
    }, 220);

    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) => Math.min(current + 1, loadingMessages.length - 1));
    }, 900);

    const doneTimer = window.setTimeout(() => {
      window.clearInterval(progressTimer);
      window.clearInterval(messageTimer);
      setProgress(100);
      transitionTo(FORM_STEPS.result);
    }, 3200);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(messageTimer);
      window.clearTimeout(doneTimer);
    };
  }, [step]);

  const renderQuestionFooter = (disabled, onClick, label = '다음') => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'flex h-14 w-full items-center justify-center rounded-full text-[15px] font-semibold transition-all duration-300',
        disabled
          ? 'bg-slate-200 text-slate-400'
          : 'bg-slate-950 text-white shadow-[0_18px_34px_rgba(15,23,42,0.24)] hover:-translate-y-0.5',
      ].join(' ')}
    >
      {label}
    </button>
  );

  let content = null;

  if (step < 4) {
    content = (
      <OnboardingIntroSlide
        slide={introSlides[step]}
        index={step}
        total={introSlides.length}
        onNext={() => transitionTo(step + 1)}
        onPrev={() => transitionTo(step - 1)}
      />
    );
  } else if (step === FORM_STEPS.concern) {
    content = (
      <ScreenShell
        title="지금 가장 고민되는 것은 무엇인가요?"
        description="현재 고민을 선택하면 맞춤 전략을 분석합니다."
        footer={renderQuestionFooter(!answers.concern, () => transitionTo(FORM_STEPS.status))}
      >
        <div className="space-y-3">
          {concernOptions.map((option) => (
            <OptionCard
              key={option}
              title={option}
              selected={answers.concern === option}
              onClick={() => updateAnswer('concern', option)}
            />
          ))}
        </div>
      </ScreenShell>
    );
  } else if (step === FORM_STEPS.status) {
    content = (
      <ScreenShell
        title="현재 어떤 상황인가요?"
        footer={renderQuestionFooter(!answers.status, () => transitionTo(FORM_STEPS.stage))}
      >
        <div className="space-y-3">
          {statusOptions.map((option) => (
            <OptionCard
              key={option}
              title={option}
              selected={answers.status === option}
              onClick={() => updateAnswer('status', option)}
            />
          ))}
        </div>
      </ScreenShell>
    );
  } else if (step === FORM_STEPS.stage) {
    content = (
      <ScreenShell
        title="현재 준비 상태는 어느 정도인가요?"
        footer={renderQuestionFooter(!answers.stage, () => transitionTo(FORM_STEPS.loading), '전략 분석 시작')}
      >
        <div className="space-y-3">
          {stageOptions.map((option) => (
            <OptionCard
              key={option}
              title={option}
              selected={answers.stage === option}
              onClick={() => updateAnswer('stage', option)}
            />
          ))}
        </div>
      </ScreenShell>
    );
  } else if (step === FORM_STEPS.loading) {
    content = <LoadingAnalysis progress={progress} message={loadingMessages[messageIndex]} />;
  } else {
    content = (
      <FinalActionCard
        concern={answers.concern}
        status={answers.status}
        stage={answers.stage}
      />
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,247,251,1)_30%,_rgba(228,235,243,1)_100%)] px-4 py-6 text-slate-950">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-md items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/60">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_70%)]" />
          <div className="relative rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.98))] px-5 pb-6 pt-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-200" />
            {progressStep > 0 ? <ProgressHeader currentStep={progressStep} /> : null}
            <div
              className={[
                'min-h-[720px] transition-all duration-200 ease-out',
                progressStep > 0 ? 'pt-7' : 'pt-2',
                visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
              ].join(' ')}
            >
              {content}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
