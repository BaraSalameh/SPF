import { Education } from "@/components/features/education";
import { Experience } from "@/components/features/experience";
import {Profile } from "@/components/features/profile";

const Portfolio = () => 
    <div className="space-y-10">
        <Profile />
        <Education />
        <Experience />
    </div>

export default Portfolio;