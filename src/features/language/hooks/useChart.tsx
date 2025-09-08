import { ChartEntry } from "@/components/charts/types.charts";
import { BarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { LanguageName } from "@/features/types.features";
import { useLanguage } from "./useLanguage";
import { useChartTitle } from "./useChartTitle";
import { commonLanguageAtts } from "../static";

export const useChart = () => {
    const languages = useLanguage();
    const chartTitle = useChartTitle();
    const commonAtts = commonLanguageAtts;

    const customData: ChartEntry[] = Object.entries(languages)
        .map(([key, value]) => {
            const commonAtt = commonAtts[key as LanguageName];

            return ({
                name: value.name,
                value: commonAtt.level
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