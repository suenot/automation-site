import { tools } from "./tools";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <header className="mb-14">
        <p className="mb-3 font-mono text-sm text-neutral-500">
          automation.suenot.com
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Social publishing automation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Open-source CLIs that publish a finished video to each social network
          through a persistent, fingerprint-protected browser. Callers own the
          queue and schedule; each tool owns one platform and a request journal
          that prevents double posts.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="https://github.com/suenot/automation-workspace"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Workspace on GitHub
          </a>
        </div>
      </header>

      <section aria-labelledby="tools">
        <h2 id="tools" className="mb-6 text-2xl font-semibold">
          Tools
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {tools.map((t) => (
            <li
              key={t.name}
              className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{t.platform}</h3>
                <code className="font-mono text-xs text-neutral-500">
                  {t.cli}
                </code>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {t.summary}
              </p>
              <a
                href={t.repo}
                className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
              >
                {t.name} →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="start">
        <h2 id="start" className="mb-4 text-2xl font-semibold">
          Get started
        </h2>
        <pre className="overflow-x-auto rounded-xl bg-neutral-100 p-4 font-mono text-sm dark:bg-neutral-900">
          {`git clone --recurse-submodules https://github.com/suenot/automation-workspace.git
cd automation-workspace/tiktok-automation
uv sync --locked --python 3.12`}
        </pre>
      </section>

      <footer className="mt-20 text-sm text-neutral-500">
        ©{" "}
        <a href="https://suenot.com" className="underline underline-offset-4">
          suenot.com
        </a>
      </footer>
    </main>
  );
}
