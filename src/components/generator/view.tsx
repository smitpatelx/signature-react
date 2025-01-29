"use client";

import dynamic from "next/dynamic";

const GeneratorViewDynamic = dynamic(() => import("@spx/components/generator/dynamic").then((mod) => mod.GeneratorViewDynamic), { ssr: false });

export const GeneratorView = () => {
    return (
        <GeneratorViewDynamic />
    )
};