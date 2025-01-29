import { Eta } from "eta";
import { ContentVariables, getVariablesWithSize, IconSize } from "./config";
import { LightModeVariables } from "./light-mode";
import { DarkModeVariables } from "./dark-mode";
import templateFile from "./templates/signature.eta";
import { pipe } from "../fpts";

const eta = new Eta({ varName: "data" });

export const getSignatureHtml = (allVariables: Record<string, string | boolean>): string => {
    return eta.renderString(templateFile, allVariables);
}

type TemplateVariables = ContentVariables & { lightModeEnabled: boolean; iconSize: IconSize; };

const getThemeVariables = (lightModeEnabled: boolean) => {
    if (lightModeEnabled) {
        return LightModeVariables;
    }
    return DarkModeVariables;
}

const getAllVariables = (prop: TemplateVariables) => {
    const { lightModeEnabled, iconSize, ...contentVariables } = prop;

    const themeVariables = pipe(lightModeEnabled, getThemeVariables, getVariablesWithSize(iconSize));

    console.log({ contactIconWidth: themeVariables.emailIconHeight });

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