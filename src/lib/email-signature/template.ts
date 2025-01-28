import { Eta } from "eta";
import { ContentVariables, getVariablesWithSize, IconSize } from "./config";
import { LightModeVariables } from "./light-mode";
import { DarkModeVariables } from "./dark-mode";
import templateFile from "./templates/signature.eta";
import { pipe } from "../fpts";

// const TEMPLATE_PATH = path.join(__dirname, "/templates");

const eta = new Eta({ varName: "data" });

export const getSignatureHtml = (allVariables: Record<string, string>): string => {
    return eta.renderString(templateFile, allVariables);
}

type TemplateVariables = ContentVariables & { lightMode: boolean; size: IconSize; };

const getThemeVariables = (lightMode: boolean) => {
    if (lightMode) {
        return LightModeVariables;
    }
    return DarkModeVariables;
}

const getAllVariables = (prop: TemplateVariables) => {
    const { lightMode, size, ...contentVariables } = prop;

    const themeVariables = pipe(lightMode, getThemeVariables, getVariablesWithSize(size));

    return {
        ...themeVariables,
        ...contentVariables,
    };
};

export const generateTemplate = (prop: TemplateVariables): string => {
    const allVariables = getAllVariables(prop);
    const html = getSignatureHtml(allVariables);
    return html;
};