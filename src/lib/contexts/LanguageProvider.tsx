import { ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import { useSystemLanguage, useUserLanguage } from "@/lib/hooks";

type Props = { children: ReactNode };

export const LanguageProvider = ({ children }: Props) => {

    const systemLanguage = useSystemLanguage();
    const userLanguage = useUserLanguage();


    return (
        <LanguageContext.Provider value={{ systemLanguage, userLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
