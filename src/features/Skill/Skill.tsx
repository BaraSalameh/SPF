'use client'

import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Award, Briefcase, Folder, GraduationCap } from "lucide-react";
import { SkillProps } from "./types.skill";
import { widget } from "@/styles";
import { useLanguage } from "@/lib/hooks";
import { userCommon } from "@/content/user";

export const Skill = () => {

    const lang = useLanguage();
    const skills = userCommon.skill;

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
                                languageMap={lang}
                                educations={value.educations}
                                experiences={value.experiences}
                                projects={value.projects}
                                certificates={value.certificates}
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
                        ? `${languageMap.userLanguage.education[item].name} | `
                        : languageMap.userLanguage.education[item].name)
                    }
                </Text>
            }
            {experiences &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Briefcase} />
                    {experiences?.map((item, idx) => idx < experiences.length - 1
                        ? `${languageMap.userLanguage.experience[item].name} | `
                        : languageMap.userLanguage.experience[item].name)
                    }
                </Text>
            }
            {projects &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Folder} />
                    {projects?.map((item, idx) => idx < projects.length - 1
                        ? `${languageMap.userLanguage.project[item].name} | `
                        : languageMap.userLanguage.project[item].name)
                    }
                </Text>
            }
            {certificates &&
                <Text size='xs'>
                    <ResponsiveIcon icon={Award} />
                    {certificates?.map((item, idx) => idx < certificates.length - 1
                        ? `${languageMap.userLanguage.certificate[item].name} | `
                        : languageMap.userLanguage.certificate[item].name)
                    }
                </Text>
            }
        </React.Fragment>
    )
}