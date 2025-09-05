import { Bio, FullName, Navigator, ProfilePicture, Utility } from "@/components/features/profile";
import { ThemeToggle } from "@/components/ui";


export default function Home() {
    return (
        <div>
            <main className="grid grid-cols-1 lg:grid-cols-6 h-screen">
                <div className="lg:col-span-2">
                    <ProfilePicture />
                </div>
                <div className="lg:col-span-4 flex flex-col gap-8 justify-center items-center px-10">
                    <div className="w-full">
                        <ThemeToggle />
                    </div>
                    <FullName />
                    <div className="px-5">
                        <Bio />
                    </div>
                    <Navigator />
                    <Utility />
                </div>
            </main>
        </div>
    );
}
