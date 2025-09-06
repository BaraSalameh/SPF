import { ResponsiveIcon } from "./ResponsiveIcon";
import { link } from '@/styles'
export const Link = ({ label, to, icon }: { label: string | (() => string); to: string; icon?: string}) => {
    const result = typeof label === 'function' ? label() : label;

    return (
        <a
            className={link()}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon && <ResponsiveIcon icon={icon} iconType="Image" /> }
            {result}
        </a>
    )
}