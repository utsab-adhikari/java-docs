import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function OutputImage({src}) {
  const [showOutput, setShowOutput] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowOutput(true)}
        className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
      >
        Output <FaPlay />
      </button>
      {showOutput && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-3xl sm:p-6 px-4">
            <div className="mb-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowOutput(false)}
                className="inline-flex items-center gap-1 border border-slate-200 bg-[#1a3c8b] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#152e6b]"
              >
                <FaPause className="h-3 w-3" />
                <span>Close</span>
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={src}
                alt="Output window of the JFrame example"
                className="max-h-[70vh] w-auto border-[#1a3c8b]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
