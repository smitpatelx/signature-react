"use client";

import { useGeneratorReducer } from "@spx/lib"
import { Configuration } from "./configuration"
import { Form } from "./form"
import { SignatureOutput } from "./signature-output"

export const GeneratorView = () => {
    const [state, dispatch] = useGeneratorReducer();

    return (
        <div className="flex-1 h-full flex flex-col">
            <Configuration
                {...state.config}
                dispatch={dispatch}
            />

            <div className="flex-1 h-full flex flex-row flex-nowrap gap-4 container mx-auto">
                <Form
                    {...state.formValues}
                    {...state.config}
                    dispatch={dispatch}
                />

                <div className="inline-block w-px bg-zinc-800" />

                <SignatureOutput
                    {...state.config}
                    {...state.formValues}
                />
            </div>
        </div>
    )
}