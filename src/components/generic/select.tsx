import { cn } from "@spx/lib/common";
import { DetailedHTMLProps, Ref, SelectHTMLAttributes } from "react";

type ValueT = string | number;
export type OptionsT<T> = { value: T; label: string; }[];

type SelectProps<T extends ValueT> = Omit<
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    'value' | 'onChange' | 'options'
> & {
    value: T;
    options: OptionsT<T>;
    label: string;
    onChange: (value: T) => void;
    ref?: Ref<HTMLSelectElement>;
}

export const Select = <T extends ValueT = ValueT>({
    value,
    options,
    label,
    onChange,
    className,
    ...rest
}: SelectProps<T>) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!e.target.value) {
            return;
        }
        onChange(e.target.value as T);
    };

    return (
        <select
            value={value}
            onChange={handleOnChange}
            className={cn(
                'py-1.5 pl-3 pr-8 bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700 focus:border-zinc-700',
                'text-ellipsis min-w-32 font-medium text-sm leading-none ',
                'focus:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
                className
            )}
            {...rest}
        >
            <option value="" disabled>{label}</option>

            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};
