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
            return `bg-gradient-to-br from-emerald-800 to-lime-600 
            hover:bg-gradient-to-br hover:from-emerald-800/70 hover:to-lime-600/70
            text-lime-50 hover:shadow-lime-500/20`;
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
    return (
        <button
            {...props}
            className={getButtonClass(size, rounded, variant, className)}
        />
    )
}