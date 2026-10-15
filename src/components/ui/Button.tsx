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
    "bg-accent text-white shadow-[0_8px_24px_-12px_var(--accent-glow)] hover:brightness-110 hover:-translate-y-px",
  secondary:
    "bg-accent-soft text-accent hover:bg-accent/20 border border-accent/25",
  ghost:
    "text-muted hover:text-foreground hover:bg-foreground/[0.05] border border-transparent hover:border-border",
  outline:
    "border border-border bg-background-elevated/40 text-foreground backdrop-blur-md hover:bg-card-hover hover:border-foreground/20 hover:-translate-y-px",
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
        "inline-flex items-center justify-center rounded-xl font-medium transition-[color,background-color,border-color,transform,box-shadow,filter] duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none",
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
        "inline-flex items-center justify-center rounded-xl font-medium transition-[color,background-color,border-color,transform,box-shadow,filter] duration-200 focus-ring",
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
