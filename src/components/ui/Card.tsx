import Image from "next/image";
import { Text } from '@/components/ui';
import { CardProps } from "./types.ui";
import { card } from "@/styles";

export const Card = ({
    title,
    subTitle,
    logoUrl,
    children,
}: CardProps) => 
    <div className={card()}>
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
