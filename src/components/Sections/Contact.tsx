export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <p className="mt-4 text-white/70">
          Open to freelance and collaborations. Let’s make something clean and vibey.
        </p>
        <div className="mt-6">
          <a
            href="mailto:you@domain.com"
            className="inline-block rounded-md bg-white px-5 py-3 font-semibold text-black hover:opacity-90"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}