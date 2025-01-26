import { IconName, type IconNameT } from "./used-icon-names";

export type IconType = IconNameT;

const ICON_SIZE = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
} as const;

type IconSize = typeof ICON_SIZE[keyof typeof ICON_SIZE];

const ICON_SIZE_CLASS = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
} as const;

export const Icon = ({
    icon,
    size = ICON_SIZE.md,
    className = ""
}: {
    icon: IconNameT,
    size?: IconSize,
    className?: string
}) => {
    const Icon = IconName[icon];
    return (
        <Icon className={`${ICON_SIZE_CLASS[size]} text-current ${className}`} />
    )
}