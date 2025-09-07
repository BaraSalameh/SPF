'use client'

import { NavButton } from "@/components/ui"
import { Award, Briefcase, Folder, GraduationCap, Languages, StarIcon } from "lucide-react"
import { useNavigator } from "../hooks/useNavigator";

export const Navigator = () => {
    const navigator = useNavigator();

    return (
        <div className="flex flex-wrap justify-center gap-5">
            <NavButton navigateTo="education" icon={GraduationCap} label={navigator.education} />
            <NavButton navigateTo="experience" icon={Briefcase} label={navigator.experience} />
            <NavButton navigateTo="project" icon={Folder} label={navigator.project} />
            <NavButton navigateTo="skill" icon={StarIcon} label={navigator.skills} />
            <NavButton navigateTo="language" icon={Languages} label={navigator.languages} />
            <NavButton navigateTo="certificate" icon={Award} label={navigator.certificates} />
        </div>
    )
}
