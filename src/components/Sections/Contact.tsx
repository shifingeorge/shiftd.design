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
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 flex items-start pt-4 md:pt-6">
        <div className="w-full">
          {/* Heading row (same style as Portfolio) */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-pixel text-xl md:text-2xl text-white/90">Contact (I actually reply)</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Force 3 columns on all breakpoints */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* Box 1: Magnetic 'Email me' button */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <MagneticButton
                href="mailto:hello@yourdomain.com?subject=Hey%20there&body=Hi%20there%2C%20I%27d%20love%20to%20connect!"
                ariaLabel="Email me"
                strength={40}
                className="uppercase tracking-wider"
              >
                Email me
              </MagneticButton>
            </div>

            {/* Box 2: Social icons with label */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <LogoVideo
                src="/media/contact.mp4"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Box 3: unchanged */}

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