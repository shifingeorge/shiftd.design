// src/components/AppIcon.tsx
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type IconName = keyof typeof LucideIcons;

// Allow any string at runtime (fallback will handle unknown names)
type NameProp = IconName | (string & {});

export interface AppIconProps extends Omit<LucideProps, 'ref'> {
  name: NameProp;
  className?: string;
}

/**
 * AppIcon — dynamic Lucide icon renderer with a safe fallback.
 * Usage: <AppIcon name="ArrowLeft" size={18} />
 */
export default function AppIcon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  ...props
}: AppIconProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name as string];

  if (!IconComponent) {
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}