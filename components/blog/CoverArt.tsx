const PALETTES = {
  1: { bg: '#E8EEF6', a: '#2B4C7E', b: '#F2994A' },
  2: { bg: '#111827', a: '#F2994A', b: '#27AE60' },
  3: { bg: '#FAFBFC', a: '#27AE60', b: '#2B4C7E' },
  4: { bg: '#F4F6F8', a: '#F2994A', b: '#2B4C7E' },
} as const;

export function CoverArt({ variant, eyebrow }: { variant: 1 | 2 | 3 | 4; eyebrow: string }) {
  const p = PALETTES[variant];
  const isDark = p.bg === '#111827';
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" role="img" aria-label={eyebrow}>
      <rect width="800" height="450" fill={p.bg} />
      <g opacity="0.5">
        <circle cx="670" cy="90" r="120" fill={p.a} opacity="0.12" />
        <circle cx="120" cy="380" r="150" fill={p.b} opacity="0.1" />
      </g>
      {/* Browser-window motif, echoing the site-mock signature used across Vendo365 */}
      <g transform="translate(150,140)">
        <rect x="0" y="0" width="500" height="170" rx="14" fill={isDark ? '#1A2332' : '#FFFFFF'} stroke={p.a} strokeOpacity="0.15" />
        <rect x="0" y="0" width="500" height="34" rx="14" fill={p.a} opacity="0.9" />
        <circle cx="20" cy="17" r="5" fill="#D94F4F" opacity="0.8" />
        <circle cx="38" cy="17" r="5" fill="#E6A817" opacity="0.8" />
        <circle cx="56" cy="17" r="5" fill="#27AE60" opacity="0.8" />
        <rect x="30" y="54" width="140" height="14" rx="7" fill={p.b} />
        <rect x="30" y="80" width="220" height="10" rx="5" fill={isDark ? '#2D3748' : '#E8EEF6'} />
        <rect x="30" y="98" width="160" height="10" rx="5" fill={isDark ? '#2D3748' : '#E8EEF6'} />
        <rect x="30" y="124" width="90" height="26" rx="8" fill={p.a} />
      </g>
      <text x="400" y="400" textAnchor="middle" fontSize="22" fontFamily="Arial, sans-serif" fontWeight="700" fill={p.a} opacity="0.55">
        Vendo365
      </text>
    </svg>
  );
}
