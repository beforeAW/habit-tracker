import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Track Your Habits
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Build better habits, one day at a time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/habits"
              className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/stats"
              className="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-700 transition-colors"
            >
              View Statistics <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
