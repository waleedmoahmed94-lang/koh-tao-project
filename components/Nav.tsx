import Link from "next/link";

export const Nav = () => (
  <nav className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
      <Link href="/" className="font-display text-lg font-semibold tracking-tight">
        Tao Dive<span className="text-accent">·</span>Board
      </Link>
      <a
        href="#directory"
        className="bg-accent px-3.5 py-2 font-mono text-xs text-bg transition-colors hover:bg-accent-deep"
      >
        Compare schools
      </a>
    </div>
  </nav>
);
