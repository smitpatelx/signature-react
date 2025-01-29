import { cn } from "@spx/lib";
import type { DetailedHTMLProps, HTMLAttributes } from "react"

const BUTTON_SIZE = {
    sm: "sm",
    md: "md",
    lg: "lg",
    icon: "icon",
} as const;
type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

const getButtonSizeClass = (size: ButtonSize) => {
    switch (size) {
        case BUTTON_SIZE.sm:
            return "px-4 py-1 text-sm font-medium";
        case BUTTON_SIZE.md:
            return "px-4 py-2 text-base font-medium";
        case BUTTON_SIZE.lg:
            return "px-6 py-3 text-lg font-medium";
        case BUTTON_SIZE.icon:
            return "p-2";
    }
};

const BUTTON_RADIUS = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
} as const;
type ButtonRadius = typeof BUTTON_RADIUS[keyof typeof BUTTON_RADIUS];

const getButtonRadiusClass = (rounded: ButtonRadius) => {
    switch (rounded) {
        case BUTTON_RADIUS.sm:
            return "rounded-sm";
        case BUTTON_RADIUS.md:
            return "rounded-md";
        case BUTTON_RADIUS.lg:
            return "rounded-lg";
        case BUTTON_RADIUS.full:
            return "rounded-full";
    }
}

const getButtonClass = (size: ButtonSize, rounded: ButtonRadius, className?: string) => cn(
    `flex gap-3 items-center justify-center leading-none
    bg-gradient-to-br from-emerald-800 to-lime-600
    hover:bg-gradient-to-br hover:from-emerald-800/70 hover:to-lime-600/70 text-teal-50
    focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
    shadow-none hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300 ease-in-out`,
    getButtonSizeClass(size),
    getButtonRadiusClass(rounded),
    className,
);

export const Button = ({
    className = "",
    size = BUTTON_SIZE.md,
    rounded = BUTTON_RADIUS.md,
    ...props
}: DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: ButtonSize,
    rounded?: ButtonRadius,
}) => {
    return (
        <button
            {...props}
            className={getButtonClass(size, rounded, className)}
        />
    )
}