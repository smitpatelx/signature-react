import Link from "next/link"
import Image from "next/image";
import { Icon, type IconType } from "@spx/components";
import { APP_CONFIG } from "@spx/lib/common";

const HEADER_LINK: Array<{
    name: string,
    url: string,
    icon: IconType,
}> = [
        {
            name: "Github",
            url: APP_CONFIG.projectRepo,
            icon: "github",
        },
        {
            name: "Portfolio",
            url: APP_CONFIG.authorPortfolio,
            icon: "user",
        },
        {
            name: "E-Mail",
            url: APP_CONFIG.authorEmail,
            icon: "mail",
        }
    ]

export const Header = () => {
    return (
        <header className="flex items-center justify-center border-b border-zinc-900 bg-zinc-950/30 backdrop-blur-sm">
            <nav className="w-full container py-2 px-4 flex gap-4 items-center justify-between">
                <Link href="/" className="group">
                    <Image
                        src="/logo/logo-email-signature.svg"
                        alt="logo"
                        width={260}
                        height={40}
                        className="w-[260px] h-[40px] brightness-100 group-hover:brightness-75 transition-all duration-300 ease-in-out"
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