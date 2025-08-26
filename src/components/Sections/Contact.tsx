import { useMemo } from 'react';
import LogoVideo from '../UI/LogoVideo';
import SocialFall from '../UI/SocialFall';
import MagneticButton from '../UI/MagneticButton';
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {

  const iconClass = 'text-2xl sm:text-3xl md:text-8xl';

  const socials = useMemo(
    () => [
      { id: 'gh', href: 'https://github.com/your-username', ariaLabel: 'GitHub', element: <FaGithub className={iconClass}/> },
      { id: 'ig', href: 'https://instagram.com/your-username', ariaLabel: 'Instagram', element: <FaInstagram className={iconClass}/> },
      { id: 'tw', href: 'https://x.com/your-username', ariaLabel: 'Twitter/X', element: <FaXTwitter className={iconClass}/> },
      { id: 'md', href: 'https://medium.com/@your-handle', ariaLabel: 'Medium', element: <FaMedium className={iconClass}/> },
    ],
    []
  );

  return (
    <section id="contact" className="pt-8 md:pt-12 pb-12 md:pb-16">
      <div className="relative z-10 w-full pl-8 pr-4 md:pl-16 md:pr-6 flex items-start">
        <div className="w-full max-w-none">
          {/* Heading row (same style as Portfolio) */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-pixel text-xl md:text-2xl text-white/90">Contact (I actually reply)</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Force 3 columns on all breakpoints */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4 lg:gap-6">
            {/* Box 1: Magnetic 'Email me' button */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <MagneticButton
                href="mailto:hello@yourdomain.com?subject=Hey%20there&body=Hi%20there%2C%20I%27d%20love%20to%20connect!"
                ariaLabel="Email me"
                strength={40}
                className="uppercase tracking-wider !px-3 !py-2 !text-xs sm:!px-4 sm:!py-2.5 sm:!text-sm md:!px-6 md:!py-4 md:!text-base"
              >
                Email me
              </MagneticButton>
            </div>

            {/* Box 2: Video */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden">
              <LogoVideo
                src="/media/contact.mp4"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Box 3: Socials with label */}
            <div className="neon-stroke aspect-square rounded-2xl overflow-hidden relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10">
              </div>
              <SocialFall
                items={socials}
                trigger="scroll"
                gravity={0.6}
                restitution={0.9}
                airFriction={0.02}
                allowDrag={true}
                className="bg-transparent "  
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}