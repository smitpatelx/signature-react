import { Button, HeroAnimation, Icon, StaticGrid } from "@spx/components";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Signature Generator - Home",
  description: "Create a professional email signature for free with our generator",
};

export default function Home() {
  return (
    <div
      className="flex-1 h-full flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20
      bg-gradient-to-br from-zinc-950/80 from-0% via-lime-950/30 via-80% to-sky-950/30 to-[120%]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroAnimation />

        <div className="flex flex-col gap-4 lg:gap-2">
          <h1 className="text-[6vw] md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-600 leading-snug lg:leading-normal">
            Email Signature Generator
          </h1>
          <p className="text-base md:text-lg text-center text-zinc-300 font-normal leading-snug md:leading-normal">
            Create a professional email signature for free with our generator
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <Link href="/generator" tabIndex={-1}>
            <Button size="lg" rounded="full" variant="primary">
              Create New
              <Icon icon="arrowRight" />
            </Button>
          </Link>
        </div>

        <StaticGrid />
      </main>
    </div>
  );
}
