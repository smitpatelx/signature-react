import { FiAlertTriangle, FiArrowRightCircle, FiCheckCircle, FiCopy, FiGithub, FiInfo, FiMail, FiRefreshCw, FiUser, FiXCircle } from "react-icons/fi";

export const IconName = {
    github: FiGithub,
    user: FiUser,
    mail: FiMail,
    arrowRight: FiArrowRightCircle,
    copy: FiCopy,
    refresh: FiRefreshCw,
    checkCircle: FiCheckCircle,
    alertTriangle: FiAlertTriangle,
    closeCircle: FiXCircle,
    info: FiInfo,
} as const;

export type IconNameT = keyof typeof IconName;