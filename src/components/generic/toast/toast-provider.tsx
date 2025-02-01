import { ReactNode, useCallback, useMemo, useState } from "react";
import { ToastContext, ToastContextT, ToastFnPropT } from "./context";
import { generateUuid } from "@spx/lib/utils";
import { Toast } from "./toast";

const DEFAULT_DELAY = 3000;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [savedToasts, setSavedToasts] = useState<(ToastFnPropT & { id: string; delayInMs: number; })[]>([]);

    const removeToastAfterDelay = useCallback((id: string, delayInMs: number) => {
        setTimeout(() => {
            setSavedToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, delayInMs);
    }, []);

    const toast = useCallback(({ type, message, delayInMs = DEFAULT_DELAY }: ToastFnPropT) => {
        const id = generateUuid();
        setSavedToasts([...savedToasts, { id, type, message, delayInMs }]);
        removeToastAfterDelay(id, delayInMs);
    }, [removeToastAfterDelay, savedToasts]);

    const clearToasts = useCallback(() => {
        setSavedToasts([]);
    }, []);

    const value = useMemo<ToastContextT>(() => ({
        toast,
        clearToasts,
    }), [toast, clearToasts]);

    return (
        <ToastContext.Provider value={value}>
            {children}

            <div className="fixed bottom-0 right-0 p-4 gap-4 flex flex-col items-end">
                {savedToasts.map(({ id, type, message }) => (
                    <Toast
                        key={id}
                        type={type}
                        message={message}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
