export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Anonymous · Private · Guilt-Free
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track What You{" "}
          <span className="text-[#58a6ff]">Actually</span> Code
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop the guilt spiral. WorkGuilt Tracker shows the gap between reported hours and real coding time — privately, anonymously, without judgment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg hover:border-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["100%", "Anonymous"],
            ["Local", "Storage First"],
            ["Zero", "Judgment"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold mb-2 uppercase tracking-wider">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited time tracking sessions",
              "Actual vs reported hours dashboard",
              "Local storage — data stays on your device",
              "Optional encrypted cloud sync",
              "Weekly guilt-free insights report",
              "Export to CSV / JSON"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is my data really private?",
              a: "Yes. All tracking data is stored locally in your browser by default. Cloud sync is optional and uses end-to-end encryption — we never see your hours."
            },
            {
              q: "Who is this for?",
              a: "Remote developers, freelancers, and dev teams who want honest productivity insights without the shame spiral of traditional time trackers."
            },
            {
              q: "What happens if I cancel?",
              a: "You keep access until the end of your billing period. Your local data is always yours — export it anytime before or after canceling."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} WorkGuilt Tracker · Built for developers who keep it real
      </footer>
    </main>
  );
}
