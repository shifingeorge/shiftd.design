// src/components/Footer.tsx
import site from 'lib/siteConfig';
import { Github, Linkedin, Instagram, Palette, Mail } from 'lucide-react';

type SocialLinkProps = {
  href?: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  if (!href) return null;
  const isMail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-red-400 transition-colors"
      title={label}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60 text-center md:text-left">
          © {year} {site.owner}. Built as <span className="gradient-text">shiftd.design</span>.
        </p>

        <div className="flex items-center gap-5">
          <SocialLink
            href={site.links.email ? `mailto:${site.links.email}` : undefined}
            label="Email"
          >
            <Mail size={18} />
          </SocialLink>

          <SocialLink href={site.links.instagram} label="Instagram">
            <Instagram size={18} />
          </SocialLink>

          <SocialLink href={site.links.github} label="GitHub">
            <Github size={18} />
          </SocialLink>

          <SocialLink href={site.links.linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </SocialLink>

          <SocialLink href={site.links.behance} label="Behance">
            {/* Lucide doesn't have a Behance logo; Palette is a tasteful stand-in */}
            <Palette size={18} />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}