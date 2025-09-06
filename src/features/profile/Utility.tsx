'use client';

import { useUtility } from "./hooks/useUtility";
import { Link } from '@/components/ui';

export const Utility = () => {
    const utilities = useUtility();

    return (
        <footer className="flex gap-[24px] flex-wrap justify-center">
            <Link icon='/file.svg' label={utilities.cv} to="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" />
            <Link icon='/window.svg' label={utilities.examples} to="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" />
            <Link icon='/globe.svg' label={utilities.goTo} to="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" />
        </footer>
    )
}