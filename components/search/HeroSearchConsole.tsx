"use client";

const floatingCards = [
  {
    title: "Web Development",
    icon: "</>",
    position: "left-[1%] top-[18%]",
  },
  {
    title: "Digital Marketing",
    icon: "▥",
    position: "right-[0%] top-[15%]",
  },
  {
    title: "Mobile Applications",
    icon: "▣",
    position: "left-[0%] top-[48%]",
  },
  {
    title: "Cyber Security",
    icon: "⬡",
    position: "right-[0%] top-[46%]",
  },
  {
    title: "AI-Powered Solutions",
    icon: "✳",
    position: "left-[5%] bottom-[8%]",
  },
  {
    title: "Scalable Solutions",
    icon: "☁",
    position: "right-[4%] bottom-[8%]",
  },
];

export default function HeroSearchConsole() {
  return (
    <section className="relative isolate overflow-hidden border-b border-cyan-300/10 bg-[#030914]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(0,100,255,0.2),transparent_48%),radial-gradient(ellipse_at_20%_80%,rgba(0,210,255,0.07),transparent_40%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:min-h-[490px] lg:grid-cols-2 lg:py-8">
        <div className="relative z-10">
          <p className="mb-4 text-xs font-bold tracking-[0.28em] text-cyan-300">
            SECURE · BUILD · GROW
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            Mending Security,
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Powering
            </span>{" "}
            Innovations.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            We build secure, high-performance custom web, mobile and
            AI-powered applications for startups and enterprises.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3.5 text-sm font-bold shadow-lg shadow-blue-500/30 transition hover:scale-105"
            >
              Schedule a Call →
            </a>

            <a
              href="#services"
              className="rounded-xl border border-cyan-400/50 px-6 py-3.5 text-sm font-semibold transition hover:bg-cyan-400/10"
            >
              ⊞ Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300">
            <span>◈ Custom Development</span>
            <span>↗ Digital Marketing</span>
            <span>⬡ Cyber Security</span>
            <span>✳ AI-Powered Solutions</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            {/* Rotating rings */}
            <div className="absolute inset-[12%] rounded-full border border-cyan-300/30 [animation:spin_22s_linear_infinite]" />
            <div className="absolute inset-[18%] rounded-full border border-dashed border-blue-400/40 [animation:spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-[25%] rounded-full border border-cyan-200/20 [animation:spin_15s_linear_infinite]" />

            <div className="absolute inset-[20%] rounded-full bg-blue-600/20 blur-3xl" />

            {/* Central 3D shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[58%] w-[50%] items-center justify-center [perspective:900px]">
                <div className="absolute inset-0 rounded-[45%] bg-cyan-400/20 blur-2xl" />

                <div className="relative flex h-full w-full items-center justify-center [animation:shieldFloat_4s_ease-in-out_infinite]">
                  <svg
                    viewBox="0 0 300 340"
                    role="img"
                    aria-label="MendSec rotating cybersecurity shield"
                    className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_0_25px_rgba(0,170,255,0.65)]"
                  >
                    <defs>
                      <linearGradient id="mendShield" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8beaff" />
                        <stop offset="45%" stopColor="#086bff" />
                        <stop offset="100%" stopColor="#061c53" />
                      </linearGradient>
                      <linearGradient id="mendShieldEdge" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#b9f5ff" />
                        <stop offset="50%" stopColor="#168cff" />
                        <stop offset="100%" stopColor="#65eaff" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M150 12 L270 55 L255 195 Q230 275 150 323 Q70 275 45 195 L30 55 Z"
                      fill="url(#mendShield)"
                      fillOpacity=".76"
                      stroke="url(#mendShieldEdge)"
                      strokeWidth="5"
                    />
                    <path
                      d="M150 32 L250 68 L237 190 Q216 255 150 294 Q84 255 63 190 L50 68 Z"
                      fill="none"
                      stroke="#9aefff"
                      strokeOpacity=".65"
                      strokeWidth="2"
                    />
                    <path
                      d="M150 60 L225 87 L215 184 Q200 230 150 260 Q100 230 85 184 L75 87 Z"
                      fill="#03152e"
                      fillOpacity=".7"
                      stroke="#35caff"
                      strokeWidth="2"
                    />
                    <path
                      d="M78 94 L112 107 M222 94 L188 107 M67 165 L101 165 M233 165 L199 165"
                      stroke="#7ceaff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <text
                      x="150"
                      y="192"
                      textAnchor="middle"
                      fontSize="103"
                      fontWeight="900"
                      fontStyle="italic"
                      fill="#13aaff"
                      stroke="#7deaff"
                      strokeWidth="1.5"
                    >
                      M
                    </text>
                    <path
                      d="M150 215 L150 240"
                      stroke="#83eaff"
                      strokeWidth="2"
                      opacity=".75"
                    />
                  </svg>

                  {/* Rotates around its vertical axis */}
                  <div className="relative z-10 [transform-style:preserve-3d] [animation:shieldTurn_8s_ease-in-out_infinite]">
                    <span className="text-5xl font-black italic text-cyan-300 opacity-90 drop-shadow-[0_0_25px_#008cff] sm:text-6xl">
                      M
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating service cards */}
            {floatingCards.map((card) => (
              <div
                key={card.title}
                className={`absolute ${card.position} z-20 w-[35%] rounded-xl border border-blue-400/60 bg-[#06152a]/90 p-2.5 shadow-[0_0_22px_rgba(0,120,255,0.2)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-300 sm:p-3.5`}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-blue-500/20 text-sm font-bold text-cyan-300 sm:h-10 sm:w-10 sm:text-lg">
                    {card.icon}
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-white sm:text-xs">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shieldFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shieldTurn {
          0%,
          100% {
            transform: rotateY(-15deg);
          }
          50% {
            transform: rotateY(15deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reduce-motion {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}