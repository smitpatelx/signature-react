import Image from "next/image"
import Link from "next/link"
import { Icon, type IconType } from "@spx/components";

const HEADER_LINK: Array<{
    name: string,
    url: string,
    icon: IconType,
}> = [
        {
            name: "Github",
            url: "https://github.com/smitpatelx",
            icon: "github",
        },
        {
            name: "Portfolio",
            url: "https://smitpatelx.com/",
            icon: "user",
        },
        {
            name: "E-Mail",
            url: "mailto:smitpatel.dev@gmail.com",
            icon: "mail",
        }
    ]

export const Header = () => {
    return (
        <header className="flex items-center justify-center border-b border-zinc-800">
            <nav className="w-full container py-2 px-4 flex gap-4 items-center justify-between">
                <Link href="/" className="group">
                    <Image
                        src="/logo/logo-email-signature.svg"
                        alt="logo"
                        width={260}
                        height={60}
                        className="brightness-100 group-hover:brightness-75 transition-all duration-300 ease-in-out"
                    />
                </Link>

                <ul className="flex items-center justify-center gap-4">
                    {HEADER_LINK.map((link) => (
                        <li key={link.name} className="flex items-center justify-center">
                            <Link
                                href={link.url}
                                title={link.name}
                                target="_blank"
                                className="text-lime-500 hover:text-lime-700 p-1 rounded-sm
                                    focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
                                    transition-all duration-300 ease-in-out"
                            >
                                <Icon icon={link.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}