import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  asChild?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:brightness-110 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]",
  secondary:
    "bg-accent-soft text-accent hover:bg-accent/20 border border-accent/20",
  ghost: "text-muted hover:text-foreground hover:bg-foreground/5",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-card-hover hover:border-foreground/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-4 text-sm gap-2",
  lg: "h-12 px-5 text-base gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
  download?: boolean | string;
};

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  download,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-ring",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download !== undefined
        ? { download: download === true ? true : download }
        : {})}
    >
      {children}
    </a>
  );
}
