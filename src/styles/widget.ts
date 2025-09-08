import { cva, VariantProps } from 'class-variance-authority';

export const widget = cva(
    'flex flex-wrap justify-center gap-5'
);

export type WidgetVariantProps = VariantProps<typeof widget>;
