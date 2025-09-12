import { ChartEntry } from "@/components/charts/types.charts";
import { BarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { useLanguage } from "@/lib/hooks";
import { LanguageName } from "@/content/user/types.user";
import { userCommon } from "@/content/user";

export const useChart = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.language.chartLabel;
    const commonAtts = userCommon;

    const customData: ChartEntry[] = Object.entries(lang.userLanguage.language)
        .map(([key, value]) => {
            const commonAtt = commonAtts.language[key as LanguageName];

            return ({
                name: value.name,
                value: commonAtt.level
            }) 
        }
    )

    return (
        <React.Fragment>
            <Text position='center'>
                {title}
            </Text>
            <BarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}