'use client'

import { CoverImage } from "@/components/ui";
import { Bio, Utility } from ".";
import { container, narrowSection, wideSection } from "@/styles/container";
import { Title } from "@/components/shared";
import { useInformation } from "./hooks/useInformation";

export const Profile = () =>
    <main id="home" className={container()}>
        <div className={narrowSection()}>
            <CoverImage name="profile-picture" alt="Profile Picture" />
        </div>
        <div className={wideSection()}>
            <Title title={useInformation().fullname} />
            <Bio />
            <Utility />
        </div>
    </main>