import React from 'react';
import { ChefHat, Clock, Leaf, Truck } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: 'Chef-Crafted',
    desc: 'Thoughtfully curated meals with homely flavors and balanced nutrition.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Reliable, daily delivery windows so your meal is there when you are.'
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'Locally sourced produce prepared fresh each day, never frozen.'
  },
  {
    icon: Truck,
    title: 'Flexible Plans',
    desc: 'Pause, skip, or switch plans anytime with a single tap.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Tiffinbox?</h2>
          <p className="mt-3 text-neutral-700">A tasty, consistent, and convenient way to eat well every day.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-1 text-sm text-neutral-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
