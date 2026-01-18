import { ReactNode } from "react";

interface IPhoneShellProps {
  children: ReactNode;
  className?: string;
  showNotch?: boolean;
  statusBarContent?: ReactNode;
}

export function IPhoneShell({
  children,
  className = "",
  showNotch = true,
  statusBarContent,
}: IPhoneShellProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame - Clean Black */}
      <div
        className="bg-black rounded-[3rem] p-[12px] shadow-2xl relative"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Side Buttons - Volume Up */}
        <div
          className="absolute left-[-3px] top-[120px] w-[3px] h-[30px] rounded-l-sm bg-black"
        />
        {/* Side Buttons - Volume Down */}
        <div
          className="absolute left-[-3px] top-[160px] w-[3px] h-[30px] rounded-l-sm bg-black"
        />
        {/* Side Buttons - Power */}
        <div
          className="absolute right-[-3px] top-[140px] w-[3px] h-[60px] rounded-r-sm bg-black"
        />

        {/* Screen Container */}
        <div className="bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Dynamic Island / Notch */}
          {showNotch && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
              <div
                className="bg-black rounded-b-3xl"
                style={{
                  width: "120px",
                  height: "30px",
                }}
              >
                {/* Camera */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2">
                  <div className="w-[10px] h-[10px] rounded-full bg-slate-900 border border-slate-700" />
                </div>
              </div>
            </div>
          )}

          {/* Status Bar */}
          {statusBarContent ? (
            <div className="relative z-40">{statusBarContent}</div>
          ) : (
            <div className="bg-black px-6 py-3 flex items-center justify-between relative z-40">
              <span className="text-white text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg
                  className="w-4 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="7" width="18" height="11" rx="2" />
                  <path d="M20 9v6l4 2V7l-4 2z" />
                </svg>
              </div>
            </div>
          )}

          {/* Screen Content */}
          <div className="relative z-30">{children}</div>
        </div>
      </div>
    </div>
  );
}