import { Divider } from "@spx/components";
import { generateTemplate, GeneratorReducerState } from "@spx/lib";
import { useMemo } from "react";

export const SignatureOutput = (props: GeneratorReducerState['config'] & GeneratorReducerState['formValues']) => {
    const htmlOutput = useMemo(() => {
        return generateTemplate(props);
    }, [props]);

    return (
        <div className="flex-1 h-full grid grid-cols-1 gap-4 p-4">
            <div className="pt-4 pb-2 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-zinc-100">Signature Preview</h3>

                <Divider />
            </div>

            <div
                className="flex-1 h-full border border-zinc-800 rounded-lg p-0 overflow-hidden
                    flex flex-col items-stretch justify-center transition-all duration-500 ease-in"
                dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
        </div>
    )
};