import { AiFillSignature } from "react-icons/ai";
import { FiGithub, FiMail, FiUser } from "react-icons/fi";

export const IconName = {
    github: FiGithub,
    user: FiUser,
    mail: FiMail,
    fillSignature: AiFillSignature,
} as const;

export type IconNameT = keyof typeof IconName;