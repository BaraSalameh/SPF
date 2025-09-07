import { BlurBackgroundVariantProps } from "@/styles";

export interface TitleProps {
    title: string | (() => string)
}

export interface BlurBackgroundProps extends BlurBackgroundVariantProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}