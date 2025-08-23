// src/components/AppImage.tsx
import type { ImgHTMLAttributes, ReactEventHandler } from 'react';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src?: string | null;
  alt?: string;
  fallbackSrc?: string;
};

/**
 * AppImage — robust <img> with a built‑in fallback.
 * - Adds lazy loading + async decoding by default
 * - Swaps to fallback once if the source fails
 */
export default function AppImage({
  src,
  alt = 'Image',
  className = '',
  fallbackSrc = '/assets/images/no_image.png',
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...props
}: Props) {
  const handleError: ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    // Prevent infinite loop if fallback also fails
    if (img.dataset.fallbackApplied === 'true') {
      onError?.(e);
      return;
    }
    img.dataset.fallbackApplied = 'true';
    img.src = fallbackSrc;
    onError?.(e);
  };

  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      {...props}
    />
  );
}