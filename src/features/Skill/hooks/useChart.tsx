import { ChartEntry } from "@/components/charts/types.charts";
import { RadarChartWidget } from '@/components/charts';
import React from "react";
import { Text } from '@/components/ui';
import { mapSkillCountToWidget } from "@/features/utils";
import { WidgetName } from "@/content/types.content";
import { useLanguage } from "@/lib/hooks";

export const useChart = () => {
    const lang = useLanguage();
    const widgetLanguage = lang.systemLanguage.navigation;
    const title = lang.systemLanguage.skill.chartLabel;

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
                {title}
            </Text>
            <RadarChartWidget
                data={customData}
            />
        </React.Fragment>
    )
}