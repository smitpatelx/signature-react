import { Button, HeroAnimation, Icon } from "@spx/components";
import Link from "next/link";

export const metadata = {
  title: "Email Signature Generator - Home",
  description: "Create a professional email signature for free with our generator",
};

const Home = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20
      bg-gradient-to-br from-zinc-950 from-0% via-lime-900/30 via-80% to-sky-900/30 to-[120%]">
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
            <div className="group p-px bg-lime-300/20 hover:bg-lime-300/40 relative rounded-full overflow-hidden
              isolate transition-colors duration-100 ease-in-out focus-within:bg-lime-300/40">
              <Button
                size="lg"
                rounded="full"
                variant="default"
                className="bg-zinc-950 hover:bg-lime-950 group-hover:bg-lime-950 z-10 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Create New
                <Icon icon="arrowRight" />
              </Button>

              <div className="-z-10 w-20 h-20 pointer-events-none rounded-full bg-gradient-to-r absolute transform origin-center
                from-zinc-900/20 from-0% via-lime-900/40 via-60% to-lime-500/80 to-100% animate-border-animation" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
