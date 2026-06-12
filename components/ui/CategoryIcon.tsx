import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function ApiIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Benzene ring / molecular structure */}
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="4.5" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 2" />
      {/* Atoms at ring positions */}
      <circle cx="20" cy="10" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="28.6" cy="15" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="28.6" cy="25" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="20" cy="30" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="11.4" cy="25" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="11.4" cy="15" r="2.2" fill="currentColor" opacity="0.9" />
      {/* Bonds */}
      <line x1="20" y1="10" x2="28.6" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <line x1="28.6" y1="25" x2="20" y2="30" stroke="currentColor" strokeWidth="1.2" />
      <line x1="11.4" y1="25" x2="11.4" y2="15" stroke="currentColor" strokeWidth="1.2" />
      {/* Extensions */}
      <line x1="20" y1="10" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28.6" y1="15" x2="33" y2="12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11.4" y1="15" x2="7" y2="12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="5" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="33" cy="12.5" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="7" cy="12.5" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function ExcipientIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Beaker shape */}
      <path d="M15 6 L15 18 L8 32 Q7 34 9 34 L31 34 Q33 34 32 32 L25 18 L25 6 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Top rim */}
      <line x1="13" y1="6" x2="27" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Liquid fill */}
      <path d="M10 27 Q12 25 14 27 Q16 29 18 27 Q20 25 22 27 Q24 29 26 27 Q28 25 30 27 L31 34 Q33 34 32 32 L9 32 Q7 34 8 32 Z"
        fill="currentColor" opacity="0.2" />
      <path d="M10 27 Q12 25 14 27 Q16 29 18 27 Q20 25 22 27 Q24 29 26 27 Q28 25 30 27"
        stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Bubbles */}
      <circle cx="17" cy="30" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="21" cy="31" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="29.5" r="0.6" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function HerbalIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Main leaf */}
      <path d="M20 34 C20 34 8 28 8 16 C8 9 14 5 20 5 C26 5 32 9 32 16 C32 28 20 34 20 34 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M20 34 C20 34 8 28 8 16 C8 9 14 5 20 5 C26 5 32 9 32 16 C32 28 20 34 20 34 Z"
        fill="currentColor" opacity="0.1" />
      {/* Central vein */}
      <path d="M20 34 L20 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Side veins */}
      <path d="M20 20 Q14 18 11 15" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M20 20 Q26 18 29 15" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M20 26 Q15 24 13 21" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M20 26 Q25 24 27 21" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M20 14 Q15 12 13 10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M20 14 Q25 12 27 10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      {/* Small droplet */}
      <path d="M20 34 Q20 37 22 37 Q24 37 24 35 Q24 33 22 32 Q20 31 20 34 Z"
        fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function NutraceuticalIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Capsule */}
      <rect x="9" y="16" width="22" height="9" rx="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Divider */}
      <line x1="20" y1="16" x2="20" y2="25" stroke="currentColor" strokeWidth="1.2" />
      {/* Left half fill */}
      <path d="M9 20.5 C9 18 10.8 16 13.5 16 L20 16 L20 25 L13.5 25 C10.8 25 9 23 9 20.5 Z"
        fill="currentColor" opacity="0.25" />
      {/* Sparkle dots around */}
      <circle cx="20" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="12" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="12" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="33" cy="20.5" r="1.2" fill="currentColor" opacity="0.45" />
      <circle cx="7" cy="20.5" r="1.2" fill="currentColor" opacity="0.45" />
      <circle cx="30" cy="29" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="29" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="33" r="1.5" fill="currentColor" opacity="0.6" />
      {/* Star sparkle */}
      <path d="M20 6 L20.5 7.5 L22 7.5 L20.8 8.3 L21.3 9.8 L20 9 L18.7 9.8 L19.2 8.3 L18 7.5 L19.5 7.5 Z"
        fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function ProbioticIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Bacterium body - oval */}
      <ellipse cx="20" cy="20" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="20" rx="9" ry="6" fill="currentColor" opacity="0.1" />
      {/* Inner cell details */}
      <ellipse cx="18" cy="20" rx="3.5" ry="2.2" fill="currentColor" opacity="0.25" />
      <circle cx="23" cy="19" r="1.5" fill="currentColor" opacity="0.2" />
      {/* Flagella */}
      <path d="M29 20 C32 18 34 15 33 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M29 21 C33 22 35 26 32 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M11 20 C8 18 6 15 7 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M11 21 C7 22 5 26 8 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Small satellite bacteria */}
      <ellipse cx="8" cy="10" rx="3.5" ry="2.3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" transform="rotate(-25 8 10)" />
      <ellipse cx="32" cy="30" rx="3.5" ry="2.3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" transform="rotate(25 32 30)" />
    </svg>
  );
}

export function RefinedOilIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Flask / round-bottom flask */}
      <path d="M16 6 L16 16 L8 28 Q6 32 10 33 L30 33 Q34 32 32 28 L24 16 L24 6 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Neck line */}
      <line x1="14" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Oil drop inside */}
      <path d="M20 14 C20 14 14 20 14 25 C14 28.3 16.7 31 20 31 C23.3 31 26 28.3 26 25 C26 20 20 14 20 14 Z"
        fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      {/* Shine */}
      <path d="M17 22 C17 20 18 19 19 19" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Drops outside flask */}
      <path d="M6 14 C6 14 4 16 4 17.5 C4 18.8 4.9 20 6 20 C7.1 20 8 18.8 8 17.5 C8 16 6 14 6 14 Z"
        fill="currentColor" opacity="0.4" />
      <path d="M34 8 C34 8 32.5 10 32.5 11.2 C32.5 12.2 33.2 13 34 13 C34.8 13 35.5 12.2 35.5 11.2 C35.5 10 34 8 34 8 Z"
        fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function CosmeticIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Crystal / diamond shape */}
      <polygon points="20,5 32,15 28,35 12,35 8,15" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polygon points="20,5 32,15 28,35 12,35 8,15" fill="currentColor" opacity="0.08" />
      {/* Inner facets */}
      <polyline points="8,15 20,20 32,15" stroke="currentColor" strokeWidth="1" opacity="0.6" fill="none" />
      <line x1="20" y1="5" x2="20" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="20" x2="12" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="20" x2="28" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Sparkles */}
      <circle cx="7" cy="8" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="33" cy="10" r="0.9" fill="currentColor" opacity="0.5" />
      <circle cx="35" cy="25" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="5" cy="28" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

const iconMap: Record<string, (props: IconProps) => JSX.Element> = {
  API: ApiIcon,
  Excipient: ExcipientIcon,
  'Herbal Extract': HerbalIcon,
  Nutraceutical: NutraceuticalIcon,
  Probiotic: ProbioticIcon,
  'Refined Oil': RefinedOilIcon,
  'Cosmetic Ingredient': CosmeticIcon,
};

export function CategoryIcon({ category, size = 40, className }: { category: string; size?: number; className?: string }) {
  const Icon = iconMap[category] || ApiIcon;
  return <Icon size={size} className={className} />;
}
