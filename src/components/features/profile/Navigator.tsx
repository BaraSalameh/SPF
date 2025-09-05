'use client'

import { NavButton } from "@/components/ui"
import { Award, Briefcase, Folder, GraduationCap, Languages, StarIcon } from "lucide-react"

export const Navigator = () => 
    <div className="flex gap-5">
        <NavButton navigateTo="education" icon={GraduationCap} label="Education" />
        <NavButton navigateTo="experience" icon={Briefcase} label="Experience" />
        <NavButton navigateTo="project" icon={Folder} label="Projects" />
        <NavButton navigateTo="skill" icon={StarIcon} label="Skills" />
        <NavButton navigateTo="language" icon={Languages} label="Languages" />
        <NavButton navigateTo="certificate" icon={Award} label="Certificates" />
    </div>
