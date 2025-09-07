import { NavigateHome, Title } from "@/components/shared";
import { CoverImage } from "@/components/ui";
import { container, narrowSection, wideSection } from "@/styles";
import { useTitle } from "./hooks";
import { Project } from "./Project";

export const Projects = () =>
    <main id="project" className={container()}>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Project />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            <CoverImage name="education" alt="Education" />
        </div>
    </main>