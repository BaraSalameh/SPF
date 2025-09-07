"use client";

import { ResponsiveContainer, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { ChartWidgetProps } from "./types.charts";
import { CustomTooltip } from "./CustomTooltip";

export const RadarChartWidget = ({
    data
}: ChartWidgetProps) => 
    <ResponsiveContainer width="100%" height="75%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar
                dataKey="value"
                stroke="#3B82F6"
                fill="#F97316"
                fillOpacity={0.7}
            />
            <Tooltip content={CustomTooltip} />
        </RadarChart>
    </ResponsiveContainer>