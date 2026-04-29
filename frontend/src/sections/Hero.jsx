import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="py-24 flex flex-col gap-6 max-w-2xl">
      <p className="text-xs uppercase tracking-widest text-gray-500">
        {profile.role}
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-xl">
        {profile.name}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl">
        {profile.intro}
      </p>

      <div className="flex gap-4 mt-4 flex-wrap">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90 transition dark:bg-white dark:text-black"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm transition"
        >
          Contact Me
        </a>

        <a
          href={profile.resumeUrl}
          download
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

