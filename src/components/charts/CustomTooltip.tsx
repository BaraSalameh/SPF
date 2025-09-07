import { Text } from "../ui";


export const CustomTooltip = ({ active, payload, label } : any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-light-sub-component dark:bg-dark-sub-component p-4 rounded-2xl">
                {payload.map((item: any, index: any)  => (
                    <Text size='sm' key={index}>
                        {label ?? item.name}: {item.value}
                    </Text>
                ))}
            </div>
        );
    }
    return null;
};