'use client'

import { LangToggle, NavButton, ThemeToggle } from "@/components/ui"
import { useLanguage } from "@/lib/hooks";
import { SettingsIcon, X } from "lucide-react"
import { useState } from "react";

export const Settings = () => {
    const lang = useLanguage();
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
