'use client'

import { SystemLanguage } from "@/content/system/types.system";
import { UserLanguage } from "@/content/user/types.user";
import { createContext } from "react";
import { LanguageContextType } from "./types.context";

export const LanguageContext = createContext<LanguageContextType>({
    systemLanguage: {} as SystemLanguage,
    userLanguage: {} as UserLanguage
});
