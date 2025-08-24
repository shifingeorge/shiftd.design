import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (
  callback: (context: { tl: gsap.core.Timeline; selector: (selector: string) => Element | null }) => void,
  dependencies: any[] = []
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const selector = (sel: string) => containerRef.current?.querySelector(sel) || null;
      callback({ tl, selector });
    }, containerRef);

    return () => ctx.revert();
  }, dependencies);

  return containerRef;
};

export const useScrollAnimation = (
  elementRef: RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  triggerOptions: ScrollTrigger.Vars = {}
) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    gsap.fromTo(element, 
      { opacity: 0, y: 50, ...animation.from },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          ...triggerOptions
        },
        ...animation.to
      }
    );
  }, [elementRef, animation, triggerOptions]);
};