import { Text } from "../ui";

type PayloadItem = {
    name: string;
    value: number | string;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: PayloadItem[];
    label?: string;
}

export const CustomTooltip = ({ active, payload, label } : CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-light-sub-component dark:bg-dark-sub-component p-4 rounded-2xl">
                {payload.map((item, index)  => (
                    <Text size='sm' key={index}>
                        {label ?? item.name}: {item.value}
                    </Text>
                ))}
            </div>
        );
    }
    return null;
};