import type { DetailedHTMLProps, HTMLAttributes } from "react"

export const Button = ({
    className = "",
    ...props
}: DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => {
    return (
        <button
            {...props}
            className={`px-6 py-2 flex gap-3 items-center justify-center
                bg-gradient-to-br from-emerald-800 to-lime-600
                hover:bg-gradient-to-br hover:from-emerald-800/70 hover:to-lime-600/70 text-teal-50 rounded-full text-lg font-medium 
                focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
                shadow-none hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300 ease-in-out
                ${className}`}
        />
    )
}