import { AiFillSignature } from "react-icons/ai";
import { FiCopy, FiGithub, FiMail, FiRefreshCw, FiUser } from "react-icons/fi";

export const IconName = {
    github: FiGithub,
    user: FiUser,
    mail: FiMail,
    fillSignature: AiFillSignature,
    copy: FiCopy,
    refresh: FiRefreshCw
} as const;

export type IconNameT = keyof typeof IconName;