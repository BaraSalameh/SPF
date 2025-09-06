import { NavigateHome, Title } from "@/components/shared";
import { CoverImage } from "@/components/ui";
import { container, narrowSection, wideSection } from "@/styles";
import { useTitle } from "./hooks";

export const Certificates = () =>
    <main id="certificate" className={container()}>
        <div className={narrowSection()}>
            <CoverImage name="education" alt="Education" />
        </div>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <NavigateHome />
        </div>
    </main>