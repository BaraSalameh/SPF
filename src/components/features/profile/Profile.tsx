import { CoverImage, LangToggle, ThemeToggle } from "@/components/ui";
import { Bio, FullName, Navigator, Utility } from "./";
import { container, narrowSection, wideSection } from "@/styles/container";

export const Profile = () =>
    <main id="home" className={container()}>
        <div className={narrowSection()}>
            <CoverImage name="profile-picture" alt="Profile Picture" />
        </div>
        <div className={wideSection()}>
            <div className="w-full flex gap-5">
                <ThemeToggle />
                <LangToggle />
            </div>
            <FullName />
            <Bio />
            <Navigator />
            <Utility />
        </div>
    </main>