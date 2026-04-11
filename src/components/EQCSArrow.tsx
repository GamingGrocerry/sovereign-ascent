import { cn } from "@/lib/utils";

type ArrowVariant = "mini" | "badge" | "corner" | "ghost" | "raw";

interface EQCSArrowProps {
  /** mini (12-16px), badge (20-24px navy square w/ white arrow), corner (60-80px semi-transparent), ghost (150-200px bg layer) */
  variant?: ArrowVariant;
  /** Override size in px */
  size?: number;
  /** "navy" (#0a2d5e) or "white" — auto-chosen per variant if omitted */
  color?: "navy" | "white";
  className?: string;
}

const ARROW_PATH =
  "M372 89 C371.585 115.254 370.985 141.484 369.865 167.718 C369.272 181.644 368.795 195.564 368.5 209.5 C368.164 225.216 367.629 240.918 367 256.625 C366.958 257.689 366.916 258.752 366.873 259.848 C366.407 271.579 365.874 283.292 365 295 C357.669 290.392 350.453 285.648 343.313 280.75 C342.368 280.105 341.423 279.461 340.45 278.797 C335.99 275.75 331.543 272.688 327.125 269.582 C326.024 268.812 326.024 268.812 324.901 268.026 C323.542 267.073 322.186 266.115 320.835 265.149 C317.271 262.584 317.271 262.584 313 262 C310.643 264.177 310.643 264.177 308.25 267 C307.805 267.503 307.359 268.007 306.9 268.525 C304.962 270.721 303.051 272.94 301.141 275.16 C293.185 284.384 284.556 292.456 275 300 C273.906 300.885 272.812 301.77 271.719 302.656 C239.882 328.307 202.746 344.914 163 354 C161.981 354.243 161.981 354.243 160.942 354.491 C120.993 363.801 78.254 360.319 39 350 C39 349.67 39 349.34 39 349 C39.612 348.96 40.224 348.921 40.854 348.88 C96.974 345.097 149.134 325.266 190 286 C190.764 285.269 190.764 285.269 191.544 284.522 C208.198 268.495 220.93 250.197 232 230 C232.633 228.848 232.633 228.848 233.278 227.672 C234.457 225.5 235.609 223.317 236.75 221.125 C237.098 220.477 237.445 219.83 237.803 219.163 C239.125 216.548 239.977 214.323 240.184 211.391 C238.263 207.512 234.923 205.855 231.313 203.625 C229.672 202.573 228.033 201.52 226.395 200.465 C225.521 199.908 224.648 199.351 223.749 198.777 C218.94 195.668 214.224 192.423 209.5 189.188 C208.606 188.578 207.712 187.968 206.79 187.34 C200.828 183.272 194.904 179.152 189 175 C192.541 172.054 196.505 170.195 200.649 168.262 C201.404 167.905 202.16 167.548 202.939 167.18 C205.416 166.011 207.895 164.849 210.375 163.688 C212.107 162.872 213.838 162.057 215.569 161.241 C220.71 158.82 225.854 156.408 231 154 C231.713 153.666 232.425 153.333 233.16 152.989 C239.331 150.102 245.505 147.221 251.682 144.346 C260.509 140.236 269.318 136.089 278.125 131.938 C289.516 126.569 300.923 121.24 312.35 115.949 C323.32 110.864 334.259 105.714 345.193 100.555 C348.496 98.997 351.8 97.442 355.106 95.89 C356.38 95.292 357.653 94.691 358.926 94.09 C360.742 93.232 362.56 92.38 364.379 91.527 C365.417 91.039 366.456 90.55 367.526 90.047 C370 89 370 89 372 89 Z";

/** Brand arrow — the ElevateQCS signature mark */
export function EQCSArrow({ variant = "raw", size, color, className }: EQCSArrowProps) {
  const resolvedSize = size ?? {
    mini: 14,
    badge: 22,
    corner: 70,
    ghost: 180,
    raw: 24,
  }[variant];

  const resolvedColor = color ?? (variant === "ghost" ? "white" : "navy");
  const fill = resolvedColor === "white" ? "#ffffff" : "#0a2d5e";

  // Badge variant: navy square with white arrow
  if (variant === "badge") {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-[3px] bg-[#0a2d5e] shrink-0",
          className
        )}
        style={{ width: resolvedSize + 8, height: resolvedSize + 8 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 500"
          width={resolvedSize}
          height={resolvedSize}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={ARROW_PATH} fill="#ffffff" />
        </svg>
      </span>
    );
  }

  // Corner anchor: semi-transparent, positioned by parent
  if (variant === "corner") {
    return (
      <svg
        viewBox="0 0 500 500"
        width={resolvedSize}
        height={resolvedSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("pointer-events-none", className)}
        aria-hidden="true"
        style={{ opacity: 0.12 }}
      >
        <path d={ARROW_PATH} fill={fill} />
      </svg>
    );
  }

  // Ghost: large background overlay
  if (variant === "ghost") {
    return (
      <svg
        viewBox="0 0 500 500"
        width={resolvedSize}
        height={resolvedSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("pointer-events-none", className)}
        aria-hidden="true"
        style={{ opacity: 0.08 }}
      >
        <path d={ARROW_PATH} fill={fill} />
      </svg>
    );
  }

  // Mini & Raw: inline arrow
  return (
    <svg
      viewBox="0 0 500 500"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block shrink-0", className)}
      aria-hidden="true"
    >
      <path d={ARROW_PATH} fill={fill} />
    </svg>
  );
}
