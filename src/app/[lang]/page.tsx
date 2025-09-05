import { Bio, FullName, Navigator, ProfilePicture, Utility } from "@/components/features/profile";
import { LangToggle, ThemeToggle } from "@/components/ui";

const Portfolio = () => 
    <div>
        <main className="grid grid-cols-1 lg:grid-cols-6 h-screen space-y-5 sm:space-y-0">
            <div className="lg:col-span-2">
                <ProfilePicture />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-8 justify-center items-center px-10">
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
    </div>

export default Portfolio;