import { cn } from "@spx/lib";
import { ToastT } from "./context";
import { Icon, IconType } from "../icon";

const getIcon = (type: ToastT): IconType => {
    switch (type) {
        case 'success':
            return 'checkCircle';
        case 'error':
            return 'closeCircle';
        case 'info':
            return 'info';
        case 'warning':
            return 'alertTriangle';
    }
}

const getIconVariantClass = (type: ToastT) => {
    switch (type) {
        case 'success':
            return 'text-green-200';
        case 'error':
            return 'text-red-200';
        case 'info':
            return 'text-blue-200';
        case 'warning':
            return 'text-yellow-200';
    }
}

const getIconClass = (type: ToastT) => cn(
    'current',
    getIconVariantClass(type),
);

const getToastClass = (type: ToastT) => {
    switch (type) {
        case 'success':
            return 'bg-green-700 text-green-50';
        case 'error':
            return 'bg-red-700 text-red-50';
        case 'info':
            return 'bg-blue-700 text-blue-50';
        case 'warning':
            return 'bg-yellow-700 text-yellow-50';
    }
}

const getClass = (type: ToastT) => cn(
    'py-2 px-4 rounded-md flex flex-nowrap items-center justify-center gap-3 animate-slide-up',
    getToastClass(type),
);

export const Toast = ({ type, message }: { type: ToastT, message: string }) => {
    return (
        <div className={getClass(type)}>
            <Icon icon={getIcon(type)} size="sm" className={getIconClass(type)} />

            <span className="whitespace-pre-wrap flex-1 text-sm font-normal">
                {message}
            </span>
        </div>
    );
}