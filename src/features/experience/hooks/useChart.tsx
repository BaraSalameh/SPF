import { ChartEntry } from "@/components/charts/types.charts";
import { BarChartWidget } from '@/components/charts';
import { getDuration } from "@/components/utils";
import React, { useContext } from "react";
import { Text } from '@/components/ui';
import { userCommon } from "@/content/user";
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { CompanyName } from "@/content/user/types.user";

export const useChart = () => {
    const lang = useContext(LanguageContext);
    const compamies = lang.userLanguage.experience;
    const chartTitle = lang.systemLanguage.experience.chartLabel;
    const commonAtts = userCommon.experience;

    const customData: ChartEntry[] = Object.entries(compamies)
        .map(([key, value]) => {
            const commonAtt = commonAtts[key as CompanyName];
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
            <BarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}