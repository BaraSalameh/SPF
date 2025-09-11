'use client'

import { LangToggle, NavButton, ThemeToggle } from "@/components/ui"
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { SettingsIcon, X } from "lucide-react"
import { useContext, useState } from "react";

export const Settings = () => {
    const lang = useContext(LanguageContext);
    const label = lang.systemLanguage.setting.label;
    const [ showSettings, setShowSettings ] = useState(false);

    return (
        <div className={`flex flex-col gap-2`}>
            <NavButton
                onClick={() => setShowSettings(!showSettings)}
                icon={showSettings ? X : SettingsIcon}
                label={label}
            />
            {showSettings &&
                <div className="flex flex-col gap-2 px-10">
                    <ThemeToggle />
                    <LangToggle />
                </div>
            }
        </div>
    )
}
