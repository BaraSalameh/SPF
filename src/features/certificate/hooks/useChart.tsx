import { ChartEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { skillsGroup } from "@/features/static";
import { SkillName } from "@/features/types.features";
import { useLanguage } from "@/lib/hooks";

export const useChart = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.certificate.chartLabel;

    const skills = skillsGroup;
    const skillCounts: Record<SkillName, number> = {} as Record<SkillName, number>;

    Object.entries(skills).forEach(([key, value]) => {
        skillCounts[key as SkillName] = value.certificates?.length ?? 0
    });

    const customData: ChartEntry[] = Object.entries(skillCounts).map(
        ([name, value]) => ({
            name,
            value,
        })
    );

    return (
        <React.Fragment>
            <Text position='center'>
                {title}
            </Text>
            <RadarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}