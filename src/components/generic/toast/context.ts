import { createContext } from "react";

export const TOAST_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning',
} as const;
export type ToastT = typeof TOAST_TYPES[keyof typeof TOAST_TYPES];

export type ToastFnPropT = { type: ToastT, message: string; delayInMs?: number; };

export type ToastContextT = {
    toast: (props: ToastFnPropT) => void;
    clearToasts: () => void;
};

export const ToastContext = createContext<ToastContextT | null>(null);
