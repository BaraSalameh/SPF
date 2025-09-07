import { CahrtEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { commonProjectsAtts } from "../static";
import { useChartTitle } from "./useChartTitle";

export const useChart = () => {
    const chartTitle = useChartTitle();
    const commonAtts = commonProjectsAtts;

    const skillCounts: Record<string, number> = {};

    Object.values(commonAtts).forEach(att => {
        att.skills.forEach((skill: string) => {
            skillCounts[skill] = (skillCounts[skill] || 0) + 1;
        });
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