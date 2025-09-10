'use client'

import { LangToggle, NavButton, ThemeToggle } from "@/components/ui"
import { useSetting } from "@/features/hooks";
import { SettingsIcon, X } from "lucide-react"
import { Fragment, useState } from "react";

export const Settings = () => {
    const setting = useSetting();
    const [ showSettings, setShowSettings ] = useState(false);

    return (
        <div className={`flex flex-col gap-2`}>
            <NavButton
                onClick={() => setShowSettings(!showSettings)}
                icon={showSettings ? X : SettingsIcon}
                label={showSettings ? setting.close : setting.open}
            />
            {showSettings &&
                <Fragment>
                    <ThemeToggle />
                    <LangToggle />
                </Fragment>
            }
        </div>
    )
}
