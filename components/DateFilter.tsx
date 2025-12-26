"use client";

export default function DateFilter({ onChange }) {
  return (
    <div className="flex gap-2">
      <input type="date" onChange={e => onChange("from", e.target.value)} />
      <input type="date" onChange={e => onChange("to", e.target.value)} />
    </div>
  );
}