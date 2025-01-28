export { pipe } from 'fp-ts/function';
export { Lens } from 'monocle-ts';

export function assertNeverThrow(x: never): never {
    throw new Error(x);
}

export function assertNeverIdentity(x: never): unknown {
    return x;
}