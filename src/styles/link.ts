import { cva, VariantProps } from 'class-variance-authority';

export const link = cva('flex items-center gap-2 underline hover:opacity-70 cursor-pointer');

export type LinkVariantProps = VariantProps<typeof link>;