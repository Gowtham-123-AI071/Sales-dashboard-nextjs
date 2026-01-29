import React from 'react';
export default function ToggleGroup({ value, onChange, options }: { value: string; onChange: (v:string)=>void; options: string[] }) {
  return (
    <div className="inline-flex gap-2 bg-white p-1 rounded-md border">
      {options.map(opt => (
        <button key={opt} onClick={()=>onChange(opt)} className={`px-2 py-1 rounded ${value===opt ? 'bg-blue-600 text-white' : ''}`}>
          {opt}
        </button>
      ))}
    </div>
  );
}
