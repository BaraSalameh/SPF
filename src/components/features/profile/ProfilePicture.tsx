import Image from 'next/image';

export const ProfilePicture = () =>
        <div
            className="
                h-full w-full
                bg-black/25
                backdrop-blur-sm
                overflow-hidden
            "
        >
            <Image
                src='/profile-picture.jpg'
                alt="Profile picture"
                fill
                className="object-cover"
                priority
            />
        </div>