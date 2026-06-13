import * as React from "react";
import { cn } from "../../lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-12 w-full bg-transparent border-b border-[#1A1A1A] px-0 py-2 text-sm text-[#1A1A1A] transition-colors duration-500",
          "focus-visible:outline-none focus-visible:border-[#D4AF37]",
          "placeholder:font-serif placeholder:italic placeholder:text-[#6C6863]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
