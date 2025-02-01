"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const GeneratorViewDynamic = dynamic(() => import("./dynamic").then((mod) => mod.GeneratorViewDynamic), { ssr: false });

export const GeneratorView = () => {
    return (
        <Suspense fallback={null}>
            <GeneratorViewDynamic />
        </Suspense>
    )
};