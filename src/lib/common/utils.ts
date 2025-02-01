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
