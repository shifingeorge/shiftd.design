import { useMemo } from 'react';
import LogoVideo from '../UI/LogoVideo';
import SocialFall from '../UI/SocialFall';
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  // Define your socials here
  const socials = useMemo(
    () => [
      { id: 'gh', href: 'https://github.com/your-username', ariaLabel: 'GitHub',   element: <FaGithub /> },
      { id: 'ig', href: 'https://instagram.com/your-username', ariaLabel: 'Instagram', element: <FaInstagram /> },
      { id: 'tw', href: 'https://x.com/your-username', ariaLabel: 'Twitter/X', element: <FaXTwitter /> },
      { id: 'md', href: 'https://medium.com/@your-handle', ariaLabel: 'Medium',  element: <FaMedium /> },
    ],
    []
  );

  return (
    <section id="contact">
      {/* Center the block in the viewport (like Hero/Portfolio) */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        <div className="w-full">
          {/* Three square boxes, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Box 1: Logo video */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <LogoVideo
                src="/media/logo.mp4"
                poster="/media/logo-poster.jpg"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Box 2: Social icons with falling physics */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
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

            {/* Box 3: reserved for later */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Intentionally empty – we’ll fill this later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}