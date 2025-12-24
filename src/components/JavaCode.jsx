"use client";

import { useState } from "react";

export default function JavaCode({ filename, CODE }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="border border-slate-800 bg-slate-900 text-xs text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#020617] px-4 py-1.5 text-[0.7rem] tracking-[0.18em] text-slate-400">
        <span>{filename}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[0.7rem] font-medium text-slate-300 hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto max-w-[80vw] bg-transparent px-4 py-3">
        <code>{CODE}</code>
      </pre>
    </div>
  );
}
