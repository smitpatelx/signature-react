import { Button, Divider, Icon } from "@spx/components";
import { generateTemplate, GeneratorReducerState } from "@spx/lib";
import { useMemo } from "react";

const OUTPUT_ID = 'signature-output';

export const SignatureOutput = (props: GeneratorReducerState['config'] & GeneratorReducerState['formValues']) => {
    const htmlOutput = useMemo(() => {
        return generateTemplate(props);
    }, [props]);

    const handleCopyHtml = () => {
        navigator.clipboard.writeText(htmlOutput);
    };

    const handleCopyView = () => {
        const viewOutput = document.getElementById(OUTPUT_ID);
        if (!viewOutput) return;

        const blobHtml = new Blob([viewOutput.innerHTML], { type: "text/html" });
        const blobText = new Blob([viewOutput.innerHTML], { type: "text/plain" });

        navigator.clipboard.write([
            new ClipboardItem({
                ['text/plain']: blobText,
                ['text/html']: blobHtml,
            })
        ]);
    }

    return (
        <div className="flex-1 h-full grid grid-cols-1 gap-4 p-4">
            <div className="pt-4 pb-2 flex flex-col gap-2">
                <div className="flex flex-nowrap items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-100">Signature Preview</h3>

                    <div className="flex flex-nowrap items-center justify-end gap-4">
                        <Button size="sm" rounded="md" onClick={handleCopyHtml}>
                            <Icon icon="copy" size="sm" />
                            <span className="text-sm font-medium">HTML</span>
                        </Button>

                        <Button size="sm" rounded="md" onClick={handleCopyView}>
                            <Icon icon="copy" size="sm" />
                            <span className="text-sm font-medium">View</span>
                        </Button>
                    </div>
                </div>

                <Divider />
            </div>

            <div
                id={OUTPUT_ID}
                className="flex-1 h-full border border-zinc-800 rounded-lg p-0 overflow-hidden
                    flex flex-col items-stretch justify-center transition-all duration-500 ease-in"
                dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
        </div>
    )
};