import { useMemo } from 'react';
import LogoVideo from '../UI/LogoVideo';
import SocialFall from '../UI/SocialFall';
import MagneticButton from '../UI/MagneticButton';
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const socials = useMemo(
    () => [
      { id: 'gh', href: 'https://github.com/your-username', ariaLabel: 'GitHub', element: <FaGithub /> },
      { id: 'ig', href: 'https://instagram.com/your-username', ariaLabel: 'Instagram', element: <FaInstagram /> },
      { id: 'tw', href: 'https://x.com/your-username', ariaLabel: 'Twitter/X', element: <FaXTwitter /> },
      { id: 'md', href: 'https://medium.com/@your-handle', ariaLabel: 'Medium', element: <FaMedium /> },
    ],
    []
  );

  return (
    <section id="contact">
      <div className="relative z-10 mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        <div className="w-full">
          {/* Force 3 columns on all breakpoints, adjust gaps responsively */}
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {/* Box 1: Magnetic 'Email me' button */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <MagneticButton
                href="mailto:designwork.shiftd@gmail.com"
                ariaLabel="Email me"
                strength={40}
                className="uppercase tracking-wider"
              >
                Email me
              </MagneticButton>
            </div>

            {/* Box 3: unchanged */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <LogoVideo
                src="/media/contact.mp4"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Box 2: Social icons with label */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10">
                <span className="rounded-md bg-black/30 px-2.5 py-1 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-white/80 ring-1 ring-white/10 backdrop-blur">
                  Socials
                </span>
              </div>
              <SocialFall
                items={socials}
                trigger="scroll"
                gravity={0.6}
                restitution={0.9}
                airFriction={0.02}
                allowDrag={true}
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}