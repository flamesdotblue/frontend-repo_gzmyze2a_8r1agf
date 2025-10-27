import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradient overlays; pointer-events-none so the 3D scene stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
              Fresh, home-style meals • Flexible plans
            </div>
            <h1 className="animate-fade-up mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              Wholesome, Home‑Style Meals Delivered Daily
            </h1>
            <p className="animate-fade-up-delay mt-4 text-base sm:text-lg text-neutral-700">
              Balanced nutrition with authentic taste. Choose veg or non‑veg, set your spice level, and we’ll do the rest.
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
