import Image from "next/image";

export function Logo({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <Image
      src={"/images/ride-air-logo.svg"}
      alt="logo"
      height={80}
      width={80}
    />
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
      <Logo className={sizeClass} color="#4308ad" />
      {size === "large" && (
        <span className="text-sm font-medium text-primary-a tracking-wide mt-1">
          Powered by <span className="font-semibold">Grab</span>
        </span>
      )}
    </div>
  );
}
