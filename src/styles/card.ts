import { cva, VariantProps } from 'class-variance-authority';

export const card = cva(
    'max-w-sm w-full rounded-2xl shadow-md bg-light-component dark:bg-dark-component p-4 flex flex-col gap-4 transition hover:shadow-xl overflow-auto scrollbar-hide max-h-[40vh] sm:max-h-[100vh]'
);

export type CardVariantProps = VariantProps<typeof card>;
