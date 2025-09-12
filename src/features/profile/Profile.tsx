'use client'

import { CoverImage } from "@/components/ui";
import { Bio, Utility } from ".";
import { container, narrowSection, wideSection } from "@/styles/container";
import { Title } from "@/components/shared";
import { useLanguage } from "@/lib/hooks";

export const Profile = () => {
    const lang = useLanguage();
    const fullname = lang.userLanguage.profile.information.fullname;

    return (
        <main id="home" className={container()}>
            <div className={narrowSection()}>
                <CoverImage name="profile-picture" alt="Profile Picture" />
            </div>
            <div className={wideSection()}>
                <Title title={fullname} />
                <Bio />
                <Utility />
            </div>
        </main>
    )
}