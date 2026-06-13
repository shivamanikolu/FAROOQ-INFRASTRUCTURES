export function StatsSection() {
  const stats = [
    { value: "100+", label: "Students Taught" },
    { value: "5 Star", label: "Client Rating" },
    { value: "Zero", label: "Hidden Fees" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-[#F9F8F6] relative border-t border-[#F9F8F6]/10">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full">
          <filter id="noiseFilterStats">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterStats)" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start space-y-4">
              <dd className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#F9F8F6] leading-[0.9]">
                {stat.value}
              </dd>
              <div className="h-px w-12 bg-[#D4AF37]" aria-hidden="true"></div>
              <dt className="uppercase text-xs tracking-[0.3em] text-[#EBE5DE] opacity-80">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
