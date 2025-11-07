import Image from "next/image";
import { Link, Text } from '@/components/ui';
import { CardProps } from "./types.ui";
import { card } from "@/styles";
import { cn } from "../utils";

export const Card = ({
    title,
    subTitle,
    logoUrl,
    content,
    link,
    className,
    subComponent,
    scrollable
}: CardProps) => 
    <div className={cn(card({ subComponent, scrollable }), className)}>
        <div className="flex items-center gap-3">
            {logoUrl &&
                <div className={`relative w-20 h-20`}>
                    <Image
                        src={logoUrl}
                        alt={`${title} logo`}
                        fill
                        className="object-contain rounded-2xl"
                    />
                </div>
            }
            <div>
                <Text>
                    {link
                    ?   <Link label={title} to={link} />
                    :   title
                    }
                    
                </Text>
                {subTitle &&
                    <Text size='sm' intent='secondary'>
                        {subTitle}
                    </Text>
                }
            </div>
        </div>
        {content}
    </div>