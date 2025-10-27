import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />

        {/* Menu teaser */}
        <section id="menu" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Daily Rotating Menu</h2>
              <p className="mt-3 text-neutral-700">
                A balanced selection of mains, grains, and sides crafted to keep you energized.
                Choose veg or non-veg plans and customize spice levels to your taste.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors"
                >
                  Choose a Plan
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full border border-black/10 bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium shadow-sm hover:border-black/20 hover:bg-white/90 transition"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Veg Thali', 'Protein Bowl', 'Lite Combo', 'Chef Special'].map((item, i) => (
                <div
                  key={item}
                  className="group aspect-[4/3] rounded-2xl border border-black/10 bg-gradient-to-br from-red-50 to-white p-4 shadow-sm overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                    backgroundImage: 'radial-gradient(600px 200px at 0% 0%, rgba(255,0,0,0.06), transparent), radial-gradient(600px 200px at 100% 100%, rgba(255,0,0,0.06), transparent)'
                  }} />
                  <div className="relative z-10 flex h-full w-full items-end">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{item}</p>
                        <span className="text-sm text-neutral-600">₹{i % 2 === 0 ? '129' : '149'}</span>
                      </div>
                      <div className="mt-2 h-1 w-full bg-black/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${70 + i * 8}%`, transition: 'width .6s ease' }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Features />
      </main>
      <Footer />

      {/* Subtle page entrance animation helpers */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .page-fade { animation: fadeIn .6s ease both }
      `}</style>
    </div>
  );
}

export default App;
