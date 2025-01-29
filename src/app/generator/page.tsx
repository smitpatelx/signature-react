"use client";

import dynamic from "next/dynamic";

const GeneratorView = dynamic(() => import("@spx/components/generator/view").then((mod) => mod.GeneratorView), { ssr: false });

const Generator = () => {
    return (
        <main className="flex-1 h-full flex flex-col">
            <GeneratorView />
        </main>
    )
}

export default Generator;
