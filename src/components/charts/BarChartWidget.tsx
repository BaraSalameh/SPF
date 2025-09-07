"use client";

import { Cell, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartWidgetProps } from "./types.charts";
import { generateColorMap } from "@/components/utils";
import { CustomTooltip } from "./CustomTooltip";

export const BarChartWidget = ({
    data,
    colorMap
}: ChartWidgetProps) => {
    const internalColorMap = colorMap ?? generateColorMap(data);

    return (
        <ResponsiveContainer width="100%" height="75%">
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={CustomTooltip} />
                <Bar
                    dataKey="value"
                    radius={[10, 0, 10, 0]}
                    fillOpacity={1}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-bar-${index}`} fill={internalColorMap[entry.name]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};