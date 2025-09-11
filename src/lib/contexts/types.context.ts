import { SystemLanguage } from "@/content/system/types.system";
import { UserLanguage } from "@/content/user/types.user";

export type LanguageContextType = {
    systemLanguage: SystemLanguage;
    userLanguage: UserLanguage;
};