"use client";

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
            return "px-3 py-1.5 text-xs font-medium";
        case BUTTON_SIZE.md:
            return "px-4 py-2 text-sm font-medium";
        case BUTTON_SIZE.lg:
            return "px-6 py-3 text-base font-medium";
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

const BUTTON_VARIANT = {
    default: "default",
    primary: "primary",
} as const;
type ButtonVariant = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];

const getButtonVariantClass = (theme: ButtonVariant) => {
    switch (theme) {
        case BUTTON_VARIANT.primary:
            return `bg-zinc-950 hover:bg-lime-950 text-zinc-100 group-hover:bg-lime-950 z-10 focus-visible:ring-0 focus-visible:ring-offset-0`;
        default:
            return "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:shadow-zinc-900/20";
    }
}

const getButtonClass = (size: ButtonSize, rounded: ButtonRadius, variant: ButtonVariant, className?: string) => cn(
    `flex gap-3 items-center justify-center leading-none
    focus-visible:ring-1 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
    shadow-none hover:shadow-md transition-all duration-300 ease-in-out`,
    getButtonSizeClass(size),
    getButtonRadiusClass(rounded),
    getButtonVariantClass(variant),
    className,
);

export type ButtonProps = DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: ButtonSize,
    rounded?: ButtonRadius,
    variant?: ButtonVariant,
};

export const Button = ({
    className = "",
    size = BUTTON_SIZE.md,
    rounded = BUTTON_RADIUS.md,
    variant = BUTTON_VARIANT.default,
    ...props
}: ButtonProps) => {
    if (variant === BUTTON_VARIANT.primary) {
        return (
            <div className="group p-px bg-lime-300/20 hover:bg-lime-300/40 relative rounded-full overflow-hidden
              isolate transition-colors duration-100 ease-in-out focus-within:bg-lime-300/40">
                <button
                    {...props}
                    className={getButtonClass(size, rounded, variant, className)}
                />

                <div className="-z-10 w-20 h-20 pointer-events-none rounded-full bg-gradient-to-r absolute transform origin-center
                    from-zinc-900/20 from-0% via-lime-900/40 via-60% to-lime-500/80 to-100% animate-border-animation" />
            </div>
        )
    }

    return (
        <button
            {...props}
            className={getButtonClass(size, rounded, variant, className)}
        />
    )
}