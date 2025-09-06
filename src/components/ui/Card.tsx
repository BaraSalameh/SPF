import Image from "next/image";
import { Text } from '@/components/ui';
import { CardProps } from "./types.ui";

export const Card = ({
    title,
    subTitle,
    logoUrl,
    children,
}: CardProps) => 
    <div className="max-w-sm w-full rounded-2xl shadow-md bg-light-component dark:bg-dark-component p-4 flex flex-col gap-4 transition hover:shadow-xl">
        <div className="flex items-center gap-3">
            {logoUrl &&
                <div className="relative w-20 h-20">
                    <Image
                        src={logoUrl}
                        alt={`${title} logo`}
                        fill
                        className="object-contain rounded-full border"
                    />
                </div>
            }
            <div>
                <Text>
                    {title}
                </Text>
                {subTitle &&
                    <Text size='sm' intent='secondary'>
                        {subTitle}
                    </Text>
                }
            </div>
        </div>
        {children}
    </div>
