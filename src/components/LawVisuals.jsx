/**
 * Reusable law-themed SVG visual components.
 * All use gold (#C9A84C) strokes on transparent backgrounds.
 */

/* ──────────────────────────────────────────────
   1. Scales of Justice — hero-grade, detailed
   ────────────────────────────────────────────── */
export function ScalesOfJustice({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central pillar */}
      <line x1="200" y1="60" x2="200" y2="420" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Balance beam */}
      <line x1="80" y1="140" x2="320" y2="140" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Fulcrum triangle */}
      <polygon points="190,100 210,100 200,60" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      {/* Left pan chains */}
      <line x1="80" y1="140" x2="60" y2="220" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="80" y1="140" x2="100" y2="220" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
      {/* Left pan */}
      <path d="M40 220 Q80 260 120 220" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      {/* Right pan chains */}
      <line x1="320" y1="140" x2="300" y2="220" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="320" y1="140" x2="340" y2="220" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
      {/* Right pan */}
      <path d="M280 220 Q320 260 360 220" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      {/* Base */}
      <line x1="140" y1="420" x2="260" y2="420" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="160" y1="435" x2="240" y2="435" stroke="#C9A84C" strokeWidth="1" />
      {/* Center circle */}
      <circle cx="200" cy="140" r="8" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Radiating circles */}
      <circle cx="200" cy="290" r="40" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.4" />
      <circle cx="200" cy="290" r="60" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.25" />
      <circle cx="200" cy="290" r="80" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.15" />
      {/* Corner accents */}
      <line x1="30" y1="30" x2="80" y2="30" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="30" y1="30" x2="30" y2="80" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="370" y1="30" x2="320" y2="30" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="370" y1="30" x2="370" y2="80" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="30" y1="470" x2="80" y2="470" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="30" y1="470" x2="30" y2="420" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="370" y1="470" x2="320" y2="470" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      <line x1="370" y1="470" x2="370" y2="420" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   2. Gavel — judge's hammer
   ────────────────────────────────────────────── */
export function Gavel({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hammer head */}
      <rect x="55" y="30" width="90" height="32" rx="4" stroke="#C9A84C" strokeWidth="1.5" fill="none" transform="rotate(-35 100 46)" />
      {/* Handle */}
      <line x1="100" y1="62" x2="55" y2="145" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      {/* Sound block (base) */}
      <ellipse cx="130" cy="160" rx="45" ry="10" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="85" y1="160" x2="85" y2="150" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="175" y1="160" x2="175" y2="150" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="85" y1="150" x2="175" y2="150" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Impact lines */}
      <line x1="78" y1="130" x2="68" y2="120" stroke="#C9A84C" strokeWidth="0.75" opacity="0.5" />
      <line x1="72" y1="140" x2="58" y2="135" stroke="#C9A84C" strokeWidth="0.75" opacity="0.5" />
      <line x1="85" y1="125" x2="80" y2="112" stroke="#C9A84C" strokeWidth="0.75" opacity="0.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   3. Courthouse Pillars — classical columns
   ────────────────────────────────────────────── */
export function CourthousePillars({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pediment / roof triangle */}
      <polygon points="160,15 30,75 290,75" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="160" y1="15" x2="160" y2="45" stroke="#C9A84C" strokeWidth="0.75" opacity="0.4" />
      {/* Entablature (horizontal beam under pediment) */}
      <rect x="25" y="75" width="270" height="12" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Pillars */}
      {[60, 120, 160, 200, 260].map((x) => (
        <g key={x}>
          {/* Capital */}
          <rect x={x - 12} y={87} width={24} height={6} stroke="#C9A84C" strokeWidth="0.75" fill="none" />
          {/* Shaft with fluting lines */}
          <rect x={x - 8} y={93} width={16} height={110} stroke="#C9A84C" strokeWidth="1" fill="none" />
          <line x1={x - 3} y1={93} x2={x - 3} y2={203} stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" />
          <line x1={x + 3} y1={93} x2={x + 3} y2={203} stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" />
          {/* Base */}
          <rect x={x - 12} y={203} width={24} height={6} stroke="#C9A84C" strokeWidth="0.75" fill="none" />
        </g>
      ))}
      {/* Steps */}
      <line x1="15" y1="215" x2="305" y2="215" stroke="#C9A84C" strokeWidth="1" />
      <line x1="10" y1="225" x2="310" y2="225" stroke="#C9A84C" strokeWidth="1" />
      <line x1="5" y1="235" x2="315" y2="235" stroke="#C9A84C" strokeWidth="1" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   4. Legal Book Stack — open and closed books
   ────────────────────────────────────────────── */
export function LegalBooks({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Closed book (bottom) */}
      <rect x="30" y="140" width="140" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="35" y1="145" x2="35" y2="155" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      {/* Closed book (middle) */}
      <rect x="35" y="115" width="130" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="40" y1="120" x2="40" y2="130" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      {/* Open book (top) */}
      <path d="M50 100 Q100 85 100 50" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <path d="M150 100 Q100 85 100 50" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      {/* Spine */}
      <line x1="100" y1="50" x2="100" y2="100" stroke="#C9A84C" strokeWidth="1" />
      {/* Page lines — left */}
      <line x1="60" y1="92" x2="95" y2="72" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      <line x1="62" y1="86" x2="94" y2="66" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      <line x1="66" y1="80" x2="93" y2="60" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      {/* Page lines — right */}
      <line x1="140" y1="92" x2="105" y2="72" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      <line x1="138" y1="86" x2="106" y2="66" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      <line x1="134" y1="80" x2="107" y2="60" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      {/* Decorative scale on open book center */}
      <circle cx="100" cy="42" r="6" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   5. Legal Shield / Crest
   ────────────────────────────────────────────── */
export function LegalShield({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M100 20 L170 50 L170 130 Q170 190 100 220 Q30 190 30 130 L30 50 Z"
        stroke="#C9A84C"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner shield outline */}
      <path
        d="M100 35 L158 60 L158 128 Q158 180 100 207 Q42 180 42 128 L42 60 Z"
        stroke="#C9A84C"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
      {/* Scales inside shield */}
      <line x1="100" y1="70" x2="100" y2="155" stroke="#C9A84C" strokeWidth="1" />
      <line x1="70" y1="95" x2="130" y2="95" stroke="#C9A84C" strokeWidth="1" />
      <polygon points="95,80 105,80 100,70" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      {/* Left pan */}
      <line x1="70" y1="95" x2="60" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="3 3" />
      <line x1="70" y1="95" x2="80" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="3 3" />
      <path d="M55 120 Q70 135 85 120" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Right pan */}
      <line x1="130" y1="95" x2="120" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="3 3" />
      <line x1="130" y1="95" x2="140" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="3 3" />
      <path d="M115 120 Q130 135 145 120" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Laurel leaves — left */}
      <path d="M60 155 Q55 145 65 140" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
      <path d="M55 165 Q48 155 60 148" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
      <path d="M52 175 Q44 165 56 158" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
      {/* Laurel leaves — right */}
      <path d="M140 155 Q145 145 135 140" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
      <path d="M145 165 Q152 155 140 148" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
      <path d="M148 175 Q156 165 144 158" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   6. Document / Contract visual
   ────────────────────────────────────────────── */
export function LegalDocument({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main document */}
      <rect x="30" y="15" width="120" height="165" rx="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      {/* Folded corner */}
      <path d="M120 15 L150 15 L150 45 Z" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.4" />
      <line x1="120" y1="15" x2="120" y2="45" stroke="#C9A84C" strokeWidth="0.75" opacity="0.4" />
      <line x1="120" y1="45" x2="150" y2="45" stroke="#C9A84C" strokeWidth="0.75" opacity="0.4" />
      {/* Header area */}
      <line x1="50" y1="40" x2="110" y2="40" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      <line x1="60" y1="50" x2="100" y2="50" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      {/* Content lines */}
      <line x1="45" y1="70" x2="135" y2="70" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="80" x2="130" y2="80" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="90" x2="135" y2="90" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="100" x2="120" y2="100" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="110" x2="135" y2="110" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="120" x2="125" y2="120" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <line x1="45" y1="130" x2="135" y2="130" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      {/* Signature line */}
      <line x1="55" y1="155" x2="105" y2="155" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      {/* Seal circle */}
      <circle cx="125" cy="152" r="12" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="125" cy="152" r="7" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Second document behind (offset) */}
      <rect x="20" y="25" width="120" height="165" rx="3" stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity="0.15" />
      {/* Pen */}
      <line x1="135" y1="180" x2="160" y2="195" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="133,178 128,185 135,182" stroke="#C9A84C" strokeWidth="0.75" fill="#C9A84C" opacity="0.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   7. Olive / Laurel Wreath — peace & family law
   ────────────────────────────────────────────── */
export function LaurelWreath({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left branch */}
      <path d="M100 200 Q60 170 50 130" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M50 130 Q45 100 55 70" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M55 70 Q65 45 85 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Left leaves */}
      <path d="M92 40 Q75 35 70 50 Q80 42 92 40" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M70 60 Q55 58 48 72 Q60 64 70 60" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M58 85 Q42 85 38 100 Q48 92 58 85" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M52 115 Q38 118 36 133 Q44 125 52 115" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M60 142 Q46 148 46 163 Q54 155 60 142" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M75 165 Q62 174 65 188 Q72 178 75 165" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      {/* Right branch */}
      <path d="M100 200 Q140 170 150 130" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M150 130 Q155 100 145 70" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M145 70 Q135 45 115 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
      {/* Right leaves */}
      <path d="M108 40 Q125 35 130 50 Q120 42 108 40" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M130 60 Q145 58 152 72 Q140 64 130 60" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M142 85 Q158 85 162 100 Q152 92 142 85" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M148 115 Q162 118 164 133 Q156 125 148 115" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M140 142 Q154 148 154 163 Q146 155 140 142" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M125 165 Q138 174 135 188 Q128 178 125 165" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      {/* Heart at center top */}
      <path d="M100 55 Q95 45 85 45 Q75 45 75 55 Q75 65 100 80 Q125 65 125 55 Q125 45 115 45 Q105 45 100 55" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   8. Decorative section divider with scales motif
   ────────────────────────────────────────────── */
export function LegalDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left line */}
      <line x1="0" y1="20" x2="250" y2="20" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
      {/* Center scales mini */}
      <line x1="290" y1="8" x2="310" y2="8" stroke="#C9A84C" strokeWidth="1" />
      <line x1="300" y1="4" x2="300" y2="32" stroke="#C9A84C" strokeWidth="1" />
      <polygon points="298,4 302,4 300,0" stroke="#C9A84C" strokeWidth="0.5" fill="#C9A84C" opacity="0.6" />
      <path d="M285 16 Q290 22 295 16" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <path d="M305 16 Q310 22 315 16" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <line x1="290" y1="8" x2="287" y2="16" stroke="#C9A84C" strokeWidth="0.5" />
      <line x1="290" y1="8" x2="293" y2="16" stroke="#C9A84C" strokeWidth="0.5" />
      <line x1="310" y1="8" x2="307" y2="16" stroke="#C9A84C" strokeWidth="0.5" />
      <line x1="310" y1="8" x2="313" y2="16" stroke="#C9A84C" strokeWidth="0.5" />
      <line x1="292" y1="32" x2="308" y2="32" stroke="#C9A84C" strokeWidth="0.75" />
      {/* Right line */}
      <line x1="350" y1="20" x2="600" y2="20" stroke="#C9A84C" strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}
