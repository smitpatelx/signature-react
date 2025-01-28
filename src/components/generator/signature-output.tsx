import { generateTemplate, GeneratorReducerState } from "@spx/lib";
import { useMemo } from "react";

export const SignatureOutput = (props: Pick<GeneratorReducerState['config'], 'lightModeEnabled'> & GeneratorReducerState['formValues']) => {
    const htmlOutput = useMemo(() => {
        console.log('props', props.company);
        return generateTemplate({
            ...props,
            companyName: props.company,
            lightMode: props.lightModeEnabled,
        });
    }, [props]);

    return (
        <div className="flex-1 h-full grid grid-cols-1 gap-4 p-4">
            <h3>Signature Preview</h3>

            <div
                className="flex-1 h-full border border-zinc-800 rounded-md p-4"
                dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
        </div>
    )
};