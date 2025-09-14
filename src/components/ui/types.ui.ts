import { LucideIcon } from "lucide-react";
import { CardVariantProps, TextVariantProps } from "@/styles";
import { Size } from "../types";
import { ReactNode } from "react";

export type ImageExtension = 'jpg' | 'png';

export interface TextProps extends TextVariantProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

type Hoverable = true | false;

type IconType = 'Lucide' | 'Image';
export interface ResponsiveIconProps {
    icon?: LucideIcon | string;
    className?: string;
    onClick?: () => void;
    size?: Size;
    iconType?: IconType;
}

export interface NavButtonProps {
    navigateTo?: string;
    label?: string;
    icon?: LucideIcon;
    onClick?: () => void;
    hoverable?: Hoverable;
}

export interface CardProps extends CardVariantProps {
    title: string;
    subTitle?: string;
    logoUrl?: string;
    content?: React.ReactNode;
    className?: string;
};

export interface ModalProps {
    title: string;
    subTitle?: string;
    content?: ReactNode | string;
    icon?: string;
    closeOnOutsideClick?: boolean;
}