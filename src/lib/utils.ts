"use client";

import { v4 } from 'uuid';
import { E } from "./fpts";

const InvalidJsonError = new Error("Invalid JSON");

export const safeParseJson = <T>(jsonString: string): E.Either<Error, T> => {
    try {
        return E.right(JSON.parse(jsonString));
    } catch {
        return E.left(InvalidJsonError);
    }
}

export const safeStringifyJson = (value: unknown): E.Either<Error, string> => {
    try {
        return E.right(JSON.stringify(value));
    } catch {
        return E.left(InvalidJsonError);
    }
}

export const generateUuid = (): string => v4();

export const copyString = (value: string) => {
    navigator.clipboard.writeText(value);
}

export const copyRichHtml = (value: string) => {
    const blobHtml = new Blob([value], { type: "text/html" });
    const blobText = new Blob([value], { type: "text/plain" });

    navigator.clipboard.write([
        new ClipboardItem({
            ['text/plain']: blobText,
            ['text/html']: blobHtml,
        })
    ]);
}
