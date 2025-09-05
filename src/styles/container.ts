import { cva, VariantProps } from 'class-variance-authority';

export const container = cva('grid grid-cols-1 lg:grid-cols-6 min-h-screen space-y-5 sm:space-y-0');
export const wideSection = cva('lg:col-span-4 flex flex-col gap-8 justify-center items-center px-10');
export const narrowSection = cva('lg:col-span-2');

export type ContainerVariantProps = VariantProps<typeof container>;
export type WideSectionVariantProps = VariantProps<typeof wideSection>;
export type NarrowSectionVariantProps = VariantProps<typeof narrowSection>;
