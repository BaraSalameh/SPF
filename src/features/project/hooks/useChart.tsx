import { ChartEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { useChartTitle } from "./useChartTitle";
import { skillsGroup } from "@/features/static";
import { SkillName } from "@/features/types.features";

export const useChart = () => {
    const chartTitle = useChartTitle();

    const skills = skillsGroup;
    const skillCounts: Record<SkillName, number> = {} as Record<SkillName, number>;

    Object.entries(skills).forEach(([key, value]) => {
        skillCounts[key as SkillName] = value.projects?.length ?? 0
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
                {chartTitle}
            </Text>
            <RadarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}