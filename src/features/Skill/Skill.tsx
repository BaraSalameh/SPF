'use client'

import { Card, Modal, ResponsiveIcon } from "@/components/ui";
import React, { Fragment } from "react";
import { Text } from '@/components/ui';
import { Award, Briefcase, Folder, GraduationCap } from "lucide-react";
import { SkillProps } from "./types.skill";
import { widget } from "@/styles";
import { useLanguage } from "@/lib/hooks";
import { userCommon } from "@/content/user";

export const Skill = () => {

    const lang = useLanguage();
    const skills = userCommon.skill;
    const cards = (isSubComponent: boolean) => Object.entries(skills)
    .slice(0, isSubComponent ? undefined : 4)
    .map(([key, value]) =>
        <Card
            className={isSubComponent ? "min-h-[fit-content] bg-light-sub-component dark:bg-dark-sub-component" : ''}
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

    return(
        <Fragment>
            <Modal
                icon={'/window.svg'}
                title={lang.systemLanguage.skill.modalLabel as string}
                jsx={cards(true)}
            />
            <div className={widget()}>
                {cards(false)}
            </div>
        </Fragment>
    )
}

const Skl = ({ educations, experiences, projects, certificates, languageMap }: SkillProps) => {
    
    
    
    return (
        <Fragment>
            {educations &&
                <div className="grid grid-cols-10 items-center">
                    <ResponsiveIcon icon={GraduationCap} />
                    <Text size='xs' className="col-span-9">
                        {educations?.map((item, idx) => idx < educations.length - 1
                            ? `${languageMap.userLanguage.education[item].name} | `
                            : languageMap.userLanguage.education[item].name)
                        }
                    </Text>
                </div>
            }
            {experiences &&
                <div className="grid grid-cols-10 items-center">
                    <ResponsiveIcon icon={Briefcase} />
                    <Text size='xs' className="col-span-9">
                        {experiences?.map((item, idx) => idx < experiences.length - 1
                            ? `${languageMap.userLanguage.experience[item].name} | `
                            : languageMap.userLanguage.experience[item].name)
                        }
                    </Text>
                </div>
            }
            {projects &&
                <div className="grid grid-cols-10 items-center">
                    <ResponsiveIcon icon={Folder} />
                    <Text size='xs' className="col-span-9">
                        {projects?.map((item, idx) => idx < projects.length - 1
                            ? `${languageMap.userLanguage.project[item].name} | `
                            : languageMap.userLanguage.project[item].name)
                        }
                    </Text>
                </div>
            }
            {certificates &&
                <div className="grid grid-cols-10 items-center">
                    <ResponsiveIcon icon={Award} />
                    <Text size='xs' className="col-span-9">
                        {certificates?.map((item, idx) => idx < certificates.length - 1
                            ? `${languageMap.userLanguage.certificate[item].name} | `
                            : languageMap.userLanguage.certificate[item].name)
                        }
                    </Text>
                </div>
            }
        </Fragment>
    )
}