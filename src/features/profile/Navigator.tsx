'use client'

import { NavButton } from "@/components/ui"
import { Award, Briefcase, Folder, GraduationCap, Languages, StarIcon } from "lucide-react"
import { useNavigator } from "../hooks/useNavigator";

export const Navigator = () => {
    const navigator = useNavigator();

    return (
        <div className="flex flex-wrap justify-center gap-5">
            <NavButton navigateTo="education" icon={GraduationCap} label={navigator.Education} />
            <NavButton navigateTo="experience" icon={Briefcase} label={navigator.Experience} />
            <NavButton navigateTo="project" icon={Folder} label={navigator.Projects} />
            <NavButton navigateTo="skill" icon={StarIcon} label={navigator.Skills} />
            <NavButton navigateTo="language" icon={Languages} label={navigator.Languages} />
            <NavButton navigateTo="certificate" icon={Award} label={navigator.Certificates} />
        </div>
    )
}
