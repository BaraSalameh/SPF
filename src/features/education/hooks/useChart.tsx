import { ChartEntry } from "@/components/charts/types.charts";
import { PieChartWidget } from '@/components/charts';
import { getDuration } from "@/components/utils";
import React, { useContext } from "react";
import { Text } from '@/components/ui';
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { userCommon } from "@/content/user";
import { UniversityName } from "@/content/user/types.user";

export const useChart = () => {
    const lang = useContext(LanguageContext);

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