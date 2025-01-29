import { GeneratorView } from "@spx/components";

export const metadata = {
    title: "Email Signature Generator - Generator",
    description: "Create a professional email signature for free with our generator",
};

const Generator = () => {
    return (
        <main className="flex-1 h-full flex flex-col">
            <GeneratorView />
        </main>
    )
}

export default Generator;
