import { CahrtEntry } from "@/components/charts/types.charts";
import { useUniversity } from "./useUniversity"
import { PieChartWidget } from '@/components/charts';
import { commonUniversityAtts } from "../static";
import { getDuration } from "@/components/utils";
import React from "react";
import { Text } from '@/components/ui';
import { useChartTitle } from "./useChartTitle";
import { UniversityNames } from "@/features/types.features";

export const useChart = () => {
    const universities = useUniversity();
    const chartTitle = useChartTitle();
    const commonAtts = commonUniversityAtts;

    const customData: CahrtEntry[] = Object.entries(universities)
        .map(([key, value]) => {
            const commonAtt = commonAtts[key as UniversityNames];
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