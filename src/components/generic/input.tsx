import { cn } from "@spx/lib";
import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes } from "react";

const INPUT_VARIANT = {
    default: 'default',
    primary: 'primary',
} as const;
type InputVariant = typeof INPUT_VARIANT[keyof typeof INPUT_VARIANT];

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    wrapperClassName?: string;
    variant?: InputVariant;
}

const getThemeClass = (variant: InputVariant) => {
    switch (variant) {
        case INPUT_VARIANT.primary:
            return "bg-lime-400 text-zinc-900";
        default:
            return "bg-zinc-800 text-zinc-200";
    }
}

const getInputClass = (variant: InputVariant, className: string | undefined) => cn(
    "rounded-md text-base font-light py-1 px-2",
    "border-zinc-700 focus:border-zinc-700 text-ellipsis",
    "focus-visible:ring-1 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
    getThemeClass(variant),
    className
)

export const Input = forwardRef<
    HTMLInputElement,
    InputProps
>(({
    label,
    id,
    className,
    wrapperClassName,
    variant = INPUT_VARIANT.default,
    ...rest
}, ref) => {
    return (
        <fieldset className={cn("flex flex-col gap-1", wrapperClassName)}>
            <label
                htmlFor={id}
                className="text-sm font-medium text-zinc-300 select-none cursor-default"
            >
                {label}
            </label>

            <input
                ref={ref}
                id={id}
                name={id}
                className={getInputClass(variant, className)}
                {...rest}
            />
        </fieldset >
    )
});
Input.displayName = "Input";
