import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SimplePCModel() {
  // Placeholder: simple 3D shapes for a PC
  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#222" emissive="#0ff" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 2.2, 1]}>
        <boxGeometry args={[1.8, 0.2, 0.4]} />
        <meshStandardMaterial color="#333" emissive="#f0f" emissiveIntensity={0.1} />
      </mesh>
      {/* Add more components here */}
    </group>
  );
}

export default function Visualizer() {
  return (
    <section className="h-[60vh] bg-black/50 rounded-xl p-4 shadow-xl flex flex-col gap-4 items-center justify-center">
      <h2 className="text-3xl font-bold text-pink-200 mb-4">3D PC Visualizer</h2>
      <div className="w-full h-full" style={{ height: "400px" }}>
        <Canvas camera={{ position: [4, 3, 6], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <SimplePCModel />
          <OrbitControls />
        </Canvas>
      </div>
      <p className="text-white/70 text-center">Interact with your build! Component visuals will update as you select parts.</p>
    </section>
  );
}
