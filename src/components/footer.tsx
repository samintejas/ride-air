import Image from "next/image";
import Link from "next/link";

const linkCol1 = [
  {
    label: "Contact us",
    href: "https://help.grab.com/passenger/en-sg/40001634-Report-an-issue-with-Ai.R-Shuttle",
    isExternal: true,
  },
  {
    label: "Privacy notice",
    href: "https://www.grab.com/sg/terms-policies/privacy-notice/",
    isExternal: true,
  },
] as const;

const linkCol2 = [
  {
    label: "Terms of service",
    href: "/terms#grab-av-pilot-terms",
    isExternal: true,
  },
  {
    label: "Code of conduct",
    href: "/terms#code-of-conduct",
    isExternal: true,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[96px] pt-10 md:pt-[50px] pb-7">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + partnership */}
          <div className="flex flex-col gap-3 items-start">
            <Image
              src="/images/footer-logo.svg"
              alt="Ai.R logo"
              width={242}
              height={133}
              className="w-[177px] md:w-[242px] h-auto"
            />
            <div className="flex items-center gap-[7px]">
              <span className="text-base text-content-tertiary tracking-[-0.32px]">
                In partnership with
              </span>
              <Image
                src="/images/weride-logo.png"
                alt="WeRide"
                width={76}
                height={19}
                className="w-[56px] md:w-[76px] h-auto"
              />
            </div>
          </div>

          {/* Desktop: legal links in 2 columns */}
          <div className="hidden md:flex gap-14">
            <div className="flex flex-col gap-[21px]">
              {linkCol1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-content-secondary tracking-[-0.32px] hover:text-content-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-[21px]">
              {linkCol2.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-content-secondary tracking-[-0.32px] hover:text-content-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile: nav links */}
          <div className="flex flex-col gap-4 md:hidden">
            {[...linkCol1, ...linkCol2].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-content-secondary tracking-[-0.32px] hover:text-content-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stroke-secondary my-6 md:mt-[50px] md:mb-[23px]" />

        {/* Bottom section */}
        <p className="text-base font-medium text-black/60 tracking-[-0.32px]">
          &copy; Grab 2010 - {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
