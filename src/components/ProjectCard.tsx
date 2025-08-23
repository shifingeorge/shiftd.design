// src/components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from 'utils/cn';
import type { Project } from 'types/project';

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const cover = project.cover || '/assets/images/no_image.png';
  const titleId = `project-title-${project.id}`;

  const CardMedia = ({ children }: { children: React.ReactNode }) =>
    project.url ? (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby={titleId}
        className="block aspect-video overflow-hidden"
        title={`Open ${project.title}`}
      >
        {children}
      </a>
    ) : (
      <div className="aspect-video overflow-hidden">{children}</div>
    );

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn('card overflow-hidden group', className)}
    >
      <CardMedia>
        <img
          src={cover}
          alt={`${project.title} cover`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 50vw, 100vw"
          draggable={false}
        />
      </CardMedia>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-foreground/60">
          <span>{project.year}</span>
          {project.role && <span className="truncate max-w-[60%] text-right">{project.role}</span>}
        </div>

        <h3 id={titleId} className="mt-2 font-display text-xl">
          {project.title}
        </h3>

        {project.blurb && (
          <p className="mt-1 text-foreground/75">
            {project.blurb}
          </p>
        )}

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2 py-1 text-xs text-foreground/90"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-1"
              aria-label={`View ${project.title}`}
              title="Open project"
            >
              <ExternalLink size={16} />
              View
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1"
              aria-label={`View code for ${project.title}`}
              title="View code"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}