import { cva, VariantProps } from 'class-variance-authority';

export const list = cva(
    'list-inside  flex flex-col gap-2 font-[family-name:var(--font-geist-mono)]',
    {
        variants: {
            size: {
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-md',
                lg: 'text-lg'
            },
            as: {
                ol: 'list-decimal list-decimal',
                ul: 'list-decimal list-disc',
                none: null
            }
        },
        defaultVariants: {
            size: 'sm',
            as: 'ol'
        },
    }
);

export type ListVariantProps = VariantProps<typeof list>;
