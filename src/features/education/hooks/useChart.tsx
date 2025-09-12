import { ChartEntry } from "@/components/charts/types.charts";
import { PieChartWidget } from '@/components/charts';
import { getDuration } from "@/components/utils";
import React from "react";
import { Text } from '@/components/ui';
import { userCommon } from "@/content/user";
import { UniversityName } from "@/content/user/types.user";
import { useLanguage } from "@/lib/hooks";

export const useChart = () => {
    const lang = useLanguage();

    const universities = lang.userLanguage.education;
    const chartTitle = lang.systemLanguage.education.chartLabel;
    const commonAtts = userCommon.education;

    const customData: ChartEntry[] = Object.entries(universities)
        .map(([key, value]) => {
            const commonAtt = commonAtts[key as UniversityName];
            const start = commonAtt.startDate;
            const end = commonAtt.endDate;

            return ({
                name: value.name,
                value: getDuration(start, end).asMonths()
            }) 
        }
    )

    return (
        <React.Fragment>
            <Text position='center'>
                {chartTitle}
            </Text>
            <PieChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}