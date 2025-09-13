import { ChartEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { useLanguage } from "@/lib/hooks";
import { userCommon } from "@/content/user";
import { SkillName } from "@/content/user/types.user";

export const useChart = () => {
    const lang = useLanguage();
    const chartTitle = lang.systemLanguage.project.chartLabel;

    const skills = userCommon.skill;
    const skillCounts: Record<SkillName, number> = {} as Record<SkillName, number>;

    Object.entries(skills).forEach(([key, value]) => {
        skillCounts[key as SkillName] = value.projects?.length ?? 0
    });

    const customData: ChartEntry[] = Object.entries(skillCounts)
    .filter(([, value]) => value !== 0)
    .map(
        ([name, value]) => ({
            name,
            value,
        })
    );

    return (
        <React.Fragment>
            <Text position='center'>
                {chartTitle}
            </Text>
            <RadarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}