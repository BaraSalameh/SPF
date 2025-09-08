import { NavigateHome, Title } from "@/components/shared";
import { CoverImage } from "@/components/ui";
import { container, narrowSection, wideSection } from "@/styles";
import { useTitle } from "./hooks";
import { Language } from "./Language";

export const Languages = () =>
    <main id="language" className={container()}>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Language />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            <CoverImage name="education" alt="Education" />
        </div>
    </main>