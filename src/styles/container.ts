import { cva, VariantProps } from 'class-variance-authority';

export const container = cva('min-h-screen flex flex-col sm:flex-row gap-5');
export const wideSection = cva('flex flex-col flex-2 justify-center items-center px-5 gap-5');
export const narrowSection = cva('flex-1');


export type ContainerVariantProps = VariantProps<typeof container>;
export type WideSectionVariantProps = VariantProps<typeof wideSection>;
export type NarrowSectionVariantProps = VariantProps<typeof narrowSection>;
