'use client'

import { NavButton } from "@/components/ui"
import { useNavigator } from "@/features/hooks";
import { Award, Briefcase, Folder, GraduationCap, Home, Languages, Navigation, StarIcon, X } from "lucide-react"
import { useState } from "react";

export const Navigator = () => {
    const navigator = useNavigator();
    const [ showNavigation, setShowNavigation ] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <NavButton
                onClick={() => setShowNavigation(!showNavigation)}
                icon={showNavigation ? X : Navigation}
                label={showNavigation ? navigator.Close : navigator.Open}
            />
            {showNavigation &&
                <div className="flex flex-col gap-2 px-10">
                    <NavButton hoverable={false} navigateTo="home" icon={Home} label={navigator.Home} />
                    <NavButton hoverable={false} navigateTo="education" icon={GraduationCap} label={navigator.Education} />
                    <NavButton hoverable={false} navigateTo="experience" icon={Briefcase} label={navigator.Experience} />
                    <NavButton hoverable={false} navigateTo="project" icon={Folder} label={navigator.Projects} />
                    <NavButton hoverable={false} navigateTo="skill" icon={StarIcon} label={navigator.Skills} />
                    <NavButton hoverable={false} navigateTo="language" icon={Languages} label={navigator.Languages} />
                    <NavButton hoverable={false} navigateTo="certificate" icon={Award} label={navigator.Certificates} />
                </div>
            }
        </div>
    )
}
