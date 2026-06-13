import * as React from "react";
import { cn } from "../../lib/utils"; // Assuming there's a utils.ts with cn, let's create it or use clsx

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center uppercase font-medium tracking-[0.2em] transition-all duration-500 overflow-hidden";
    
    const sizeClasses = {
      default: "h-12 px-8 text-xs",
      sm: "h-10 px-6 text-[10px]",
      lg: "h-14 px-10 text-sm",
    };

    if (variant === "primary") {
      return (
        <button
          ref={ref}
          className={cn(
            baseClasses,
            sizeClasses[size],
            "bg-[#1A1A1A] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] group",
            className
          )}
          {...props}
        >
          <span className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
          <span className="relative z-10">{children}</span>
        </button>
      );
    }

    if (variant === "secondary") {
      return (
        <button
          ref={ref}
          className={cn(
            baseClasses,
            sizeClasses[size],
            "bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center uppercase font-medium tracking-[0.2em] text-[#1A1A1A] text-xs hover:text-[#D4AF37] transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-500",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
