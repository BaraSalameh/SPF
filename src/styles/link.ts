import { cva, VariantProps } from 'class-variance-authority';

export const link = cva('flex items-center gap-2 hover:underline hover:underline-offset-1 hover:opacity-70 cursor-pointer');

export type LinkVariantProps = VariantProps<typeof link>;