'use client'

import { NavButton } from "@/components/ui"
import { useNavigator } from "@/features/hooks/useNavigator";
import { Award, Briefcase, Folder, GraduationCap, Home, Languages, Navigation, StarIcon, X } from "lucide-react"
import { Fragment, useState } from "react";

export const Navigator = () => {
    const navigator = useNavigator();
    const [ showNavigation, setShowNavigation ] = useState(false);

    return (
        <div className="flex flex-col gap-5">
            <NavButton
                onClick={() => setShowNavigation(!showNavigation)}
                icon={showNavigation ? X : Navigation}
                label={showNavigation ? navigator.Close : navigator.Open}
            />
            {showNavigation &&
                <Fragment>
                    <NavButton navigateTo="home" icon={Home} label={navigator.Home} />
                    <NavButton navigateTo="education" icon={GraduationCap} label={navigator.Education} />
                    <NavButton navigateTo="experience" icon={Briefcase} label={navigator.Experience} />
                    <NavButton navigateTo="project" icon={Folder} label={navigator.Projects} />
                    <NavButton navigateTo="skill" icon={StarIcon} label={navigator.Skills} />
                    <NavButton navigateTo="language" icon={Languages} label={navigator.Languages} />
                    <NavButton navigateTo="certificate" icon={Award} label={navigator.Certificates} />
                </Fragment>
            }
        </div>
    )
}
