import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function LinkGithub({ href }) {
  return (
<div className="flex items-center justify-between text-xs text-slate-600">
          <span>Reference &amp; full code</span>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View on GitHub</span>
          </Link>
        </div>
    );
}