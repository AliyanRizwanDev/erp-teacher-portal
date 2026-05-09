import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        processing: "border-transparent bg-blue-100 text-blue-800 px-4 py-1",
        success:
          "border-transparent bg-[#d9faf2] text-[#00daa7] px-4 py-1 font-normal font-roboto",
        error:
          "border-transparent bg-[#fee0e0] text-[#ff0404] px-4 py-1 font-normal font-roboto",
        approved:
          "border-transparent bg-[#d9faf2] text-[#00daa7] px-4 py-1 font-normal font-roboto",
        pending:
          "border-transparent bg-[#fff4e6] text-[#ff9800] px-4 py-1 font-normal font-roboto",
        rejected:
          "border-transparent bg-[#fee0e0] text-[#ff0404] px-4 py-1 font-normal font-roboto",
        "in-process":
          "border-transparent bg-blue-100 text-blue-800 px-4 py-1 font-normal font-roboto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
