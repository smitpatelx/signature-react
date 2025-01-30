import { Button, Icon } from "@spx/components";
import Link from "next/link";

export const metadata = {
  title: "Email Signature Generator - Home",
  description: "Create a professional email signature for free with our generator",
};

const Home = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-600 leading-snug md:leading-normal">
            Email Signature Generator
          </h1>
          <p className="text-base md:text-lg text-center text-lime-500 leading-snug md:leading-normal">
            Create a professional email signature for free with our generator
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <Link href="/generator">
            <Button size="lg" rounded="full" variant="primary">
              Create New
              <Icon icon="arrowRight" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
