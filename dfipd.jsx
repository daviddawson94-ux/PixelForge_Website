import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Visualizer from "./pages/Visualizer";
import RGBBackground from "./components/RGBBackground";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <RGBBackground />
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <Link to="/" className="text-3xl font-bold text-white drop-shadow-lg">PixelForge</Link>
        <div className="flex gap-6 text-lg">
          <Link to="/builder" className="text-white hover:text-cyan-300 transition">Build PC</Link>
          <Link to="/visualizer" className="text-white hover:text-pink-400 transition">3D Visualizer</Link>
        </div>
      </nav>
      <main className="relative z-10 px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/visualizer" element={<Visualizer />} />
        </Routes>
      </main>
    </div>
  );
}
