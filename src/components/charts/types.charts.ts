export type CahrtEntry = {
    name: string;
    value: number;
}

export type ChartWidgetProps = {
    data: CahrtEntry[];
    colorMap?: Record<string, string>;
}