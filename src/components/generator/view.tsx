import { Configuration } from "./configuration"
import { Form } from "./form"
import { SignatureOutput } from "./signature-output"

export const GeneratorView = () => {
    return (
        <div className="flex-1 h-full flex flex-col">
            <Configuration />

            <div className="flex-1 h-full flex flex-row flex-nowrap gap-4">
                <Form />

                <div className="inline-block w-px bg-zinc-800" />

                <SignatureOutput />
            </div>
        </div>
    )
}