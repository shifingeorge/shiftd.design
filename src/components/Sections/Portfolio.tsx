import { useState } from 'react';
import ProjectModal from '../UI/ProjectModal';
// Adjust this import to match your data export:
// If you use "export const projects = [...]", keep as is.
// If default export, use "import projects from '../../data/projects';"
import { projects } from '../../data/projects';

type Project = {
  id?: string | number;
  title: string;
  description?: string;
  tags?: string[];
  cover?: string;
  link?: string;
  repo?: string;
};

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Selected Work</h2>
            <p className="mt-2 text-white/60">A few projects that blend clean UX with smooth interactions.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p: Project) => (
            <button
              key={p.id ?? p.title}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-xl border border-white/10 text-left"
            >
              {p.cover ? (
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-48 w-full items-center justify-center bg-white/5">
                  <span className="text-white/50">No preview</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                {p.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/70">
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="text-[11px] text-white/50">+{p.tags.length - 3}</span>
                    )}
                  </div>
                ) : null}
              </div>
            </button>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selected}
          project={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}