import { Button, Divider, Icon, useToast } from "@spx/components";
import { generateTemplate } from "@spx/lib";
import { copyRichHtml, copyString } from "@spx/lib/utils";
import { GeneratorReducerState } from "@spx/lib/reducers";
import { useMemo } from "react";

const OUTPUT_ID = 'signature-output';

export const SignatureOutput = (props: GeneratorReducerState['config'] & GeneratorReducerState['formValues']) => {
    const { toast } = useToast();

    const htmlOutput = useMemo(() => {
        return generateTemplate(props);
    }, [props]);

    const handleCopyHtml = () => {
        copyString(htmlOutput);
        toast({ type: 'success', message: 'Copied HTML to clipboard' });
    };

    const handleCopyRichText = () => {
        const viewOutput = document.getElementById(OUTPUT_ID);
        if (!viewOutput) return;

        copyRichHtml(viewOutput.innerHTML);
        toast({ type: 'success', message: 'Copied Rich-Text to clipboard' });
    }

    return (
        <div className="flex-1 h-full grid grid-cols-1 gap-4 p-4">
            <div className="pt-4 pb-2 flex flex-col gap-2">
                <div className="flex flex-col lg:flex-row flex-nowrap items-start lg:items-center lg:justify-between gap-2 lg:gap-4">
                    <h3 className="text-lg font-semibold text-zinc-100">Signature Preview</h3>

                    <div className="flex flex-nowrap items-center justify-end gap-4">
                        <Button size="md" rounded="md" onClick={handleCopyHtml}>
                            <Icon icon="copy" size="sm" />
                            HTML
                        </Button>

                        <Button size="md" rounded="md" onClick={handleCopyRichText}>
                            <Icon icon="copy" size="sm" />
                            Rich Text
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