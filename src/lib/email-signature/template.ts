import { Eta } from "eta";
import { ContentVariables } from "./config";
import { LightModeVariables } from "./light-mode";
import { DarkModeVariables } from "./dark-mode";
import templateFile from "./templates/signature.eta";

// const TEMPLATE_PATH = path.join(__dirname, "/templates");

const eta = new Eta({ varName: "data" });

export const getSignatureHtml = (allVariables: Record<string, string>): string => {
    return eta.renderString(templateFile, allVariables);
}

type TemplateVariables = ContentVariables & { lightMode: boolean };

const getThemeVariables = (lightMode: boolean) => {
    if (lightMode) {
        return LightModeVariables;
    }
    return DarkModeVariables;
}

const getAllVariables = (prop: TemplateVariables) => {
    const { lightMode, ...contentVariables } = prop;

    const themeVariables = getThemeVariables(lightMode);

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