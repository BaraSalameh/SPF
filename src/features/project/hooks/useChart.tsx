import { CahrtEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { useChartTitle } from "./useChartTitle";
import { skillsGroup } from "@/features/static";
import { SkillNames } from "@/features/types.features";

export const useChart = () => {
    const chartTitle = useChartTitle();

    const skills = skillsGroup;
    const skillCounts: Record<SkillNames, number> = {} as Record<SkillNames, number>;

    Object.entries(skills).forEach(([key, value]) => {
        skillCounts[key as SkillNames] = value.projects?.length ?? 0
    });

    const customData: CahrtEntry[] = Object.entries(skillCounts).map(
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