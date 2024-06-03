"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Utility function to get a lighter or darker shade of the color
const getBgColor = (color) => {
    const colorMap = {
        "bg-red-500": "bg-red-100",
        "bg-green-500": "bg-green-100",
        "bg-blue-500": "bg-blue-100",
        "bg-yellow-500": "bg-yellow-100",
        "bg-orange-500": "bg-orange-100",
    };
    return colorMap[color] || "bg-gray-200"; // Default to a light gray if the color is not in the map
};

const Progress = React.forwardRef(
    ({ className, value, indicatorClr, ...props }, ref) => {
        const bgColor = getBgColor(indicatorClr);
        return (
            <ProgressPrimitive.Root
                ref={ref}
                className={cn(
                    `relative h-2 w-full overflow-hidden rounded-full ${bgColor}`,
                    className
                )}
                {...props}
            >
                <ProgressPrimitive.Indicator
                    className={cn(
                        "flex-1 w-full h-full transition-all",
                        indicatorClr
                    )}
                    style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                />
            </ProgressPrimitive.Root>
        );
    }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
