'use client'

import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Award, Briefcase, Folder, GraduationCap } from "lucide-react";
import { skillsGroup } from "../static";
import { SkillProps } from "./types.skill";
import { widget } from "@/styles";
import { useProject } from "../project/hooks";
import { useUniversity } from "../education/hooks";
import { useCompany } from "../experience/hooks";
import { useCertificate } from "../certificate/hooks";

export const Skill = () => {
    const skills = skillsGroup;
    const educationLanguage = useUniversity();
    const experienceLanguage = useCompany();
    const projectLanguage = useProject();
    const certificateLanguage = useCertificate();

    return(
        <div className={widget()}>
            {
                Object.entries(skills).map(([key, value]) => 
                    <Card
                        key={key}
                        title={value.name}
                        logoUrl={value.logo}
                        content={
                            <Skl
                                educations={value.educations}
                                experiences={value.experiences}
                                projects={value.projects}
                                certificates={value.certificates}
                                languageMap={{
                                    educations: educationLanguage,
                                    experiences: experienceLanguage,
                                    projects: projectLanguage,
                                    certificates: certificateLanguage
                                }}
                            />
                        }
                    />
                )
            }
        </div>
    )
}

const Skl = ({ educations, experiences, projects, certificates, languageMap }: SkillProps) => {
    
    
    return (
        <React.Fragment>
            {educations &&
                <Text size='xs'>
                    <ResponsiveIcon icon={GraduationCap} />
                    {educations?.map((item, idx) => idx < educations.length - 1
                        ? `${languageMap.educations[item].name} | `
                        : languageMap.educations[item].name)
                    }
                </Text>
            }
            {experiences &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Briefcase} />
                    {experiences?.map((item, idx) => idx < experiences.length - 1
                        ? `${languageMap.experiences[item].name} | `
                        : languageMap.experiences[item].name)
                    }
                </Text>
            }
            {projects &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Folder} />
                    {projects?.map((item, idx) => idx < projects.length - 1
                        ? `${languageMap.projects[item].name} | `
                        : languageMap.projects[item].name)
                    }
                </Text>
            }
            {certificates &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Award} />
                    {certificates?.map((item, idx) => idx < certificates.length - 1
                        ? `${languageMap.certificates[item].name} | `
                        : languageMap.certificates[item].name)
                    }
                </Text>
            }
        </React.Fragment>
    )
}