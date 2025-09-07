import { cva, VariantProps } from 'class-variance-authority';

export const container = cva('grid grid-cols-1 lg:grid-cols-3 min-h-screen space-y-5 sm:space-y-0');
export const wideSection = cva('col-span-1 lg:col-span-2 flex flex-col gap-8 justify-center items-center px-10');
export const narrowSection = cva('col-span-1 flex flex-col min-h-100 justify-center');

export type ContainerVariantProps = VariantProps<typeof container>;
export type WideSectionVariantProps = VariantProps<typeof wideSection>;
export type NarrowSectionVariantProps = VariantProps<typeof narrowSection>;
