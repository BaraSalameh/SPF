import { Education } from "@/features/education";
import { Experience } from "@/features/experience";
import {Profile } from "@/features/profile";

const Portfolio = () => 
    <div className="space-y-10">
        <Profile />
        <Education />
        <Experience />
    </div>

export default Portfolio;