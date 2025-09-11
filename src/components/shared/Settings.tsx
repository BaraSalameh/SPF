'use client'

import { LangToggle, NavButton, ThemeToggle } from "@/components/ui"
import { useSetting } from "@/features/hooks";
import { SettingsIcon, X } from "lucide-react"
import { useState } from "react";

export const Settings = () => {
    const settings = useSetting();
    const [ showSettings, setShowSettings ] = useState(false);

    return (
        <div className={`flex flex-col gap-2`}>
            <NavButton
                onClick={() => setShowSettings(!showSettings)}
                icon={showSettings ? X : SettingsIcon}
                label={settings.openSettings}
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
