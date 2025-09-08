export type ChartEntry = {
    name: string;
    value: number;
}

export type ChartWidgetProps = {
    data: ChartEntry[];
    colorMap?: Record<string, string>;
}