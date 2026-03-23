import Link from "next/link";
import { LogoFull } from "./logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/routes" },
  { label: "Technology", href: "/technology" },
  { label: "Fleet", href: "/fleet" },
] as const;

const legalLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Privacy notice", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Code of conduct", href: "/conduct" },
] as const;

export function Footer() {
  return (
    <footer className="bg-bg-primary w-full">
      <div className="mx-auto max-w-5xl px-6 md:px-16 py-10 md:py-14">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Logo + partnership */}
          <div className="flex flex-col gap-2">
            <LogoFull size="large" />
            <p className="text-sm text-content-secondary">
              In partnership with{" "}
              <span className="font-semibold">WeRide</span>
            </p>
          </div>

          {/* Mobile: nav links */}
          <div className="flex flex-col gap-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-content-secondary hover:text-content-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop: legal links in 2x2 grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-x-16 gap-y-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-content-secondary hover:text-content-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stroke-secondary my-8 md:my-10" />

        {/* Bottom section */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-content-secondary">
            &copy; Grab 2010 - {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Mobile: legal links */}
          <div className="flex flex-col gap-4 md:hidden">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-content-secondary hover:text-content-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
