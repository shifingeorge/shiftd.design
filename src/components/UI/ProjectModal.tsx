import { useEffect } from 'react';

// If you already have a Project type in src/types, import it instead.
// import type { Project } from '../../types';
type Project = {
  id?: string | number;
  title: string;
  description?: string;
  tags?: string[];
  cover?: string;
  link?: string;
  repo?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-[92vw] max-w-3xl rounded-xl border border-white/10 bg-neutral-900/90 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded p-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {project.cover && (
          <img
            src={project.cover}
            alt={project.title}
            className="mt-4 w-full rounded-lg border border-white/10"
          />
        )}

        {project.description && (
          <p className="mt-4 text-white/80">{project.description}</p>
        )}

        {project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              View Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}