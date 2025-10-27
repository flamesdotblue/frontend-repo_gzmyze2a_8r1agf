import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              Wholesome, Home‑Style Meals Delivered Daily
            </h1>
            <p className="animate-fade-up-delay mt-4 text-base sm:text-lg text-neutral-700">
              Freshly prepared tiffins with balanced nutrition and authentic taste. Flexible plans that fit your lifestyle.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors"
              >
                Start Subscription
              </a>
              <a
                href="#menu"
                className="inline-flex items-center rounded-full border border-black/10 bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-sm hover:border-black/20 hover:bg-white/90 transition"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeUp .7s ease-out both; }
        .animate-fade-up-delay { animation: fadeUp .7s ease-out .15s both; }
      `}</style>
    </section>
  );
};

export default Hero;
