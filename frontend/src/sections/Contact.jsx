import { useState } from "react";
import { socialLinks } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Message not sent. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Let’s build something great.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-gray-600 dark:text-gray-400 leading-7">
            I'm open to freelance work, full-time opportunities and
            collaborations. Feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer noopener"
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <textarea
              rows="5"
              placeholder="Your message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-black text-white text-sm hover:opacity-90 transition dark:bg-white dark:text-black"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your email client opened successfully.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}