"use client";

import { generateColorMap } from "@/components/utils";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartWidgetProps } from "./types.charts";
import { CustomTooltip } from "./CustomTooltip";
import React from "react";

export const PieChartWidget = ({
    data,
    colorMap
}: ChartWidgetProps) => {
    const internalColorMap = colorMap ?? generateColorMap(data);

    return (
        <ResponsiveContainer width="100%" height="75%">
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="75%"
                    label
                    legendType="star"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={internalColorMap[entry.name]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip content={CustomTooltip} />
            </PieChart>
        </ResponsiveContainer>
    );
};