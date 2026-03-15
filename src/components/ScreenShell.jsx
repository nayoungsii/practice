export function ScreenShell({ children, title, description, footer, compact = false }) {
  return (
    <section className="flex h-full flex-col">
      <div className="flex-1">
        <h1 className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.04em] text-slate-950">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-[300px] text-[15px] leading-6 text-slate-500">
            {description}
          </p>
        ) : null}
        <div className={compact ? 'mt-6' : 'mt-8'}>{children}</div>
      </div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </section>
  );
}
