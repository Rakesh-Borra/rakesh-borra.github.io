/**
 * Lightweight SVG geometric field. Animations are CSS-only and paused under
 * prefers-reduced-motion. Theme-aware stroke colors via CSS variables.
 */
export function GeometricBackground() {
  return (
    <div className="geo-field pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="geo-glow geo-glow-a" />
      <div className="geo-glow geo-glow-b" />
      <div className="geo-glow geo-glow-c" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft filled pentagons / polygons for depth */}
        <g className="geo-layer geo-layer-slow" stroke="currentColor">
          <polygon
            className="geo-fill geo-opacity-fill geo-rotate-a"
            points="190,110 255,150 235,230 150,235 125,155"
            fill="currentColor"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-b"
            points="1185,150 1255,205 1220,285 1140,275 1120,195"
            fill="none"
            strokeWidth="1"
          />
          <polygon
            className="geo-fill geo-opacity-fill geo-rotate-b"
            points="990,610 1060,645 1040,725 965,740 940,665"
            fill="currentColor"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-c"
            points="310,630 395,675 360,770 270,745 255,660"
            fill="none"
            strokeWidth="1"
          />
        </g>

        {/* Outlined triangles + mid-layer polygons */}
        <g className="geo-layer geo-layer-mid" fill="none" stroke="currentColor">
          <polygon
            className="geo-shape geo-opacity-b geo-rotate-a"
            points="720,80 805,145 760,225 685,195"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-a"
            points="520,310 595,285 635,360 560,400 495,360"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-c geo-rotate-b"
            points="1290,470 1365,520 1325,605 1245,565"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-b"
            points="150,410 225,380 265,455 195,490"
            strokeWidth="1"
          />
          <polygon
            className="geo-shape geo-opacity-a"
            points="860,360 910,330 945,380 890,410"
            strokeWidth="0.9"
          />
        </g>

        {/* Connecting lines + particles */}
        <g className="geo-layer geo-layer-fast" stroke="currentColor">
          <line className="geo-line geo-opacity-a" x1="210" y1="190" x2="500" y2="305" strokeWidth="0.7" />
          <line className="geo-line geo-opacity-b" x1="880" y1="170" x2="1210" y2="255" strokeWidth="0.7" />
          <line className="geo-line geo-opacity-a" x1="360" y1="710" x2="720" y2="610" strokeWidth="0.7" />
          <line className="geo-line geo-opacity-c" x1="970" y1="530" x2="1290" y2="650" strokeWidth="0.7" />
          <line className="geo-line geo-opacity-b" x1="600" y1="120" x2="700" y2="280" strokeWidth="0.6" />
          <circle className="geo-dot geo-opacity-b geo-float-a" cx="460" cy="180" r="2.4" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-a geo-float-b" cx="1050" cy="360" r="2" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-c geo-float-a" cx="640" cy="700" r="2.5" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-b geo-float-b" cx="250" cy="560" r="1.8" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-a geo-float-a" cx="1320" cy="720" r="2" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-c geo-float-b" cx="780" cy="480" r="1.6" fill="currentColor" stroke="none" />
          <circle className="geo-dot geo-opacity-b" cx="980" cy="120" r="1.5" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
