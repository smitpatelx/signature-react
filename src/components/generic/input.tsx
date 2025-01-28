import { cn } from "@spx/lib";
import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    wrapperClassName?: string;
}

export const Input = forwardRef<
    HTMLInputElement,
    InputProps
>(({
    label,
    id,
    className,
    wrapperClassName,
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
                className={cn(
                    "text-zinc-200 bg-zinc-800 rounded-md text-base py-1 px-2",
                    "focus-visible:ring-lime-400 border-zinc-700 focus-visible:border-zinc-950",
                    className
                )}
                {...rest}
            />
        </fieldset >
    )
});
Input.displayName = "Input";
