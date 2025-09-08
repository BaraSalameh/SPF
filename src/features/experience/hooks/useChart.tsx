import { ChartEntry } from "@/components/charts/types.charts";
import { BarChartWidget } from '@/components/charts';
import { getDuration } from "@/components/utils";
import React from "react";
import { Text } from '@/components/ui';
import { useCompany } from "./useCompany";
import { useChartTitle } from "./useChartTitle";
import { commonCompanyAtts } from "../static";
import { CompanyName } from "@/features/types.features";

export const useChart = () => {
    const compamies = useCompany();
    const chartTitle = useChartTitle();
    const commonAtts = commonCompanyAtts;

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