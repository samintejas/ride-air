import { Button as BaseButton } from "@base-ui-components/react/button";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "primary-inverse";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary-b to-[#43308b] text-white hover:opacity-90",
  secondary:
    "bg-bg-primary text-content-primary hover:bg-surface-primary",
  outline:
    "border border-stroke-secondary text-content-primary hover:border-content-tertiary",
  ghost:
    "text-content-disable hover:text-content-tertiary hover:bg-surface-primary",
  link: "text-content-secondary hover:underline underline-offset-4 !px-0 !py-0 !rounded-none !h-auto",
  "primary-inverse":
    "border border-white text-white hover:bg-white/10",
};

export function Button({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const isLink = variant === "link";
  const base = isLink
    ? "inline-flex items-center gap-1 font-medium text-base cursor-pointer transition-colors"
    : "inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 font-medium text-base cursor-pointer transition-colors";

  return (
    <BaseButton
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </BaseButton>
  );
}
