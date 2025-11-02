import { useState } from "react";

const COMPONENTS = {
  CPU: ["Intel i9-14900K", "AMD Ryzen 9 7950X"],
  GPU: ["NVIDIA RTX 4090", "AMD Radeon RX 7900 XTX"],
  RAM: ["32GB DDR5", "64GB DDR5"],
  Storage: ["1TB NVMe SSD", "2TB NVMe SSD"],
  Case: ["NZXT H7 Flow", "Lian Li O11D Evo"],
};

export default function Builder() {
  const [selection, setSelection] = useState({});
  return (
    <section className="max-w-xl mx-auto bg-white/10 rounded-xl p-8 shadow-xl backdrop-blur">
      <h2 className="text-3xl font-bold text-cyan-200 mb-6">Build Your PC</h2>
      <form className="flex flex-col gap-6">
        {Object.entries(COMPONENTS).map(([key, options]) => (
          <div key={key}>
            <label className="block text-lg text-white font-semibold mb-2">{key}</label>
            <select
              className="w-full p-2 rounded bg-black/60 text-white border border-cyan-300 focus:outline-none"
              value={selection[key] || ""}
              onChange={e => setSelection(s => ({ ...s, [key]: e.target.value }))}
            >
              <option value="">Select {key}</option>
              {options.map(opt => (
                <option value={opt} key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </form>
      <div className="mt-8 text-white">
        <h3 className="text-xl mb-2">Your Selection:</h3>
        <ul>
          {Object.entries(selection).map(([k, v]) => (
            <li key={k}><span className="font-semibold">{k}:</span> {v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
