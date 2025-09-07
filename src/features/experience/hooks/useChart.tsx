import { CahrtEntry } from "@/components/charts/types.charts";
import { BarChartWidget } from '@/components/charts';
import { getDuration } from "@/components/utils";
import React from "react";
import { Text } from '@/components/ui';
import { useCompany } from "./useCompany";
import { useChartTitle } from "./useChartTitle";
import { commonCompanyAtts } from "../static";

export const useChart = () => {
    const compamies = useCompany();
    const chartTitle = useChartTitle();
    const commonAtts = commonCompanyAtts;

    const customData: CahrtEntry[] = Object.entries(compamies)
        .map(([key, value]) => {
            const commonAtt = commonAtts[key as keyof typeof commonAtts];
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