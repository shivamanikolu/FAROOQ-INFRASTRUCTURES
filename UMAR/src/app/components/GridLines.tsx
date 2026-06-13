export function GridLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-between max-w-[1600px] mx-auto px-8 md:px-16 w-full">
      <div className="w-px h-full bg-[#1A1A1A]/10"></div>
      <div className="w-px h-full bg-[#1A1A1A]/10 hidden md:block"></div>
      <div className="w-px h-full bg-[#1A1A1A]/10 hidden md:block"></div>
      <div className="w-px h-full bg-[#1A1A1A]/10"></div>
    </div>
  );
}
