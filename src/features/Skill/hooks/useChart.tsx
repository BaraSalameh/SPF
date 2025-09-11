import { ChartEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React, { useContext } from "react";
import { Text } from '@/components/ui';
import { useChartTitle } from "./useChartTitle";
import { mapSkillCountToWidget } from "@/features/utils";
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { WidgetName } from "@/content/types.content";

export const useChart = () => {
    const chartTitle = useChartTitle();
    const lang = useContext(LanguageContext);
    const widgetLanguage = lang.systemLanguage.navigation;

    const data = [
        mapSkillCountToWidget("Education"),
        mapSkillCountToWidget("Experience"),
        mapSkillCountToWidget("Projects"),
        mapSkillCountToWidget("Certificates")
    ]

    const customData: ChartEntry[] = data.flatMap(obj =>
        Object.entries(obj).map(([key, value]) => ({
            name: widgetLanguage[key as WidgetName],
            value
        }))
    )

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