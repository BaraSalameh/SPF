import Image from 'next/image';

export const ProfilePicture = () =>
    <div className="h-full w-full backdrop-blur-sm">
        <Image
            src='/profile-picture.jpg'
            alt="Profile picture"
            fill
            className="object-cover"
            priority
        />
    </div>