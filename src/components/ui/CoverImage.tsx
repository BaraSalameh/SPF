import Image from 'next/image';
import { ImageExtension } from './types.ui';

export const CoverImage = ({name, alt, ext}: {name: string; alt: string, ext?: ImageExtension}) =>
    <div className="relative min-h-[65vh] h-full w-full backdrop-blur-sm">
        <Image
            src={`/${name}.${ext ?? 'jpg'}`}
            alt={alt}
            fill
            sizes='100%'
            className="object-cover"
            priority
        />
    </div>