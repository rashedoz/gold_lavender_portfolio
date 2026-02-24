// Gold Lavender logo mark — rounded square with gold/lavender split and GL watermark letters
// Matches the actual brand identity: square badge, gold left half, lavender right half,
// white border, large semi-transparent "G" and "L" serif watermarks.
export default function GoldLavenderLogo({ size = 40 }) {
  const r = 7  // corner radius proportional to 40px viewBox

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gold Lavender"
    >
      <defs>
        {/* Gold shimmer gradient on left half */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#E8D000" />
          <stop offset="50%"  stopColor="#D4B800" />
          <stop offset="100%" stopColor="#B89A00" />
        </linearGradient>
        {/* Lavender gradient on right half */}
        <linearGradient id="lavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#C99EE0" />
          <stop offset="100%" stopColor="#9A60BD" />
        </linearGradient>
        {/* Clip: left half */}
        <clipPath id="glLeftClip">
          <rect x="1" y="1" width="19" height="38" rx="0" />
        </clipPath>
        {/* Clip: right half */}
        <clipPath id="glRightClip">
          <rect x="20" y="1" width="19" height="38" rx="0" />
        </clipPath>
        {/* Clip: full rounded rect for border */}
        <clipPath id="glFullClip">
          <rect x="1" y="1" width="38" height="38" rx={r} />
        </clipPath>
      </defs>

      {/* Gold left half */}
      <rect x="1" y="1" width="38" height="38" rx={r} fill="url(#goldGrad)" clipPath="url(#glLeftClip)" />
      {/* Lavender right half */}
      <rect x="1" y="1" width="38" height="38" rx={r} fill="url(#lavGrad)" clipPath="url(#glRightClip)" />

      {/* G watermark — large, semi-transparent, serif-style */}
      <text
        x="10"
        y="30"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="rgba(255,255,255,0.22)"
        clipPath="url(#glLeftClip)"
      >
        G
      </text>
      {/* L watermark */}
      <text
        x="30"
        y="30"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="rgba(255,255,255,0.22)"
        clipPath="url(#glRightClip)"
      >
        L
      </text>

      {/* White border (rounded rect stroke) */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx={r}
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}
