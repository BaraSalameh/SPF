import { LucideIcon } from "lucide-react";
import { TextVariantProps } from "@/styles";
import { Size } from "../types";

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

type IconType = 'Lucide' | 'Image';
export interface ResponsiveIconProps {
    icon?: LucideIcon | string;
    className?: string;
    onClick?: () => void;
    size?: Size;
    iconType?: IconType;
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