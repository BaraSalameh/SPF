import { LucideIcon } from "lucide-react";
import { TextVariantProps } from "@/styles";

export type ImageExtension = 'jpg' | 'png';

export interface TextProps extends TextVariantProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export interface ThemeToggleProps {
    title?: string;
    themeNameIncluded?: boolean;
    className?: string;
}

export interface ResponsiveIconProps {
    icon?: LucideIcon;
    className?: string;
    onClick?: () => void;
}

export interface NavButtonProps {
    navigateTo: string;
    label?: string;
    icon?: LucideIcon;
}

export interface CardProps {
    title: string;
    subTitle?: string;
    logoUrl?: string;
    children?: React.ReactNode;
};