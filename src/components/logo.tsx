export function Logo({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 142 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized "Qi.R" logo */}
      <circle
        cx="17"
        cy="17"
        r="15"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
      />
      <circle cx="17" cy="17" r="4.5" fill={color} />
      <text
        x="40"
        y="28"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fontSize="30"
        fill={color}
        letterSpacing="-1"
      >
        i.r
      </text>
    </svg>
  );
}

export function LogoFull({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const sizeClass = size === "large" ? "h-24" : "h-8";
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <Logo
        className={sizeClass}
        color="#4308ad"
      />
      {size === "large" && (
        <span className="text-sm font-medium text-primary-a tracking-wide mt-1">
          Powered by <span className="font-semibold">Grab</span>
        </span>
      )}
    </div>
  );
}
