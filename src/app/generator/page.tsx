import { GeneratorView } from "@spx/components";

export const metadata = {
    title: "Email Signature Generator - Generator",
    description: "Create a professional email signature for free with our generator",
};

const Generator = () => {
    return (
        <main className="flex-1 h-full flex flex-col bg-gradient-to-br from-zinc-950 from-0% via-lime-950/30 via-80% to-sky-950/30 to-[120%]">
            <GeneratorView />
        </main>
    )
}

export default Generator;
