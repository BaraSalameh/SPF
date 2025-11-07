'use client'

import { NavButton } from "@/components/ui"
import { useLanguage } from "@/lib/hooks";
import { Award, Briefcase, Folder, GraduationCap, Languages, StarIcon } from "lucide-react"

export const Navigator = () => {
    const lang = useLanguage();
    const navigator = lang.systemLanguage.navigation;

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {/* <NavButton navigateTo="home" icon={Home} label={navigator.Home} /> */}
            <NavButton navigateTo="education" icon={GraduationCap} label={navigator.Education} />
            <NavButton navigateTo="experience" icon={Briefcase} label={navigator.Experience} />
            <NavButton navigateTo="project" icon={Folder} label={navigator.Projects} />
            <NavButton navigateTo="skill" icon={StarIcon} label={navigator.Skills} />
            <NavButton navigateTo="language" icon={Languages} label={navigator.Languages} />
            <NavButton navigateTo="certificate" icon={Award} label={navigator.Certificates} />
        </div>
    )
}
