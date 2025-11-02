export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-extrabold text-white drop-shadow">Welcome to <span className="text-cyan-300">PixelForge</span></h1>
      <p className="mt-6 text-2xl text-white/80 max-w-2xl text-center">
        Build your dream gaming PC with real-time 3D previews and the latest components.<br />
        Start by <span className="text-pink-300 font-semibold">selecting your components</span> or explore your build in 3D!
      </p>
    </section>
  );
}
