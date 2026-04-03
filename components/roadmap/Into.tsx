export default function AboutSumerFade() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What is SumerFade?
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-zinc-300">
            <strong className="text-white">SumerFade</strong> is a handcrafted film emulation system designed to bring
            the emotion, imperfection, and beauty of analog film into the
            digital color grading world. Built for filmmakers and colorists.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-zinc-300">
            It recreates the look of classic stocks like <em>Kodak Vision3, Fuji 3513,</em> and
            <em> Cinestill</em> – with full support for <strong className="text-white">16mm, 35mm, and 65mm</strong> film aesthetics.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-zinc-300">
            At its core, SumerFade is more than just looks or LUTs. It’s a custom
            engine featuring <strong className="text-white">DCTL-based sliders</strong> for Split Toning, Density, Hue
            Split, film tone mapping, and dual-layer negative + print workflows
            – all in real-time.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-zinc-200">
            Crafted for precision, but driven by emotion. <br />
            <span className="italic">This is SumerFade.</span> — By CineSumer
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/ROADMAP/SumerFade.png"
            alt="SumerFade Preview"
            className="rounded-2xl shadow-2xl border border-zinc-800 max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}