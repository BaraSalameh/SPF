import { Certificates } from "@/features/certificate";
import { Education } from "@/features/education";
import { Experience } from "@/features/experience";
import { Languages } from "@/features/language";
import {Profile } from "@/features/profile";
import { Projects } from "@/features/project";
import { Skills } from "@/features/Skill";

const Portfolio = () => 
    <div className="space-y-10">
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Languages />
    </div>

export default Portfolio;