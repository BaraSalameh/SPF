import { WidgetName } from "../types.content";

interface CommonAtts {
    sourceLabel?: string;
    linkLabel?: string;
    chartLabel: string;
    description?: string;
}

export interface SystemLanguage {
    navigation: Record<NavigationAtts, string>;
    setting: SettingAtts;
    profile: ProfileAtts;
    education: CommonAtts
    experience: CommonAtts;
    project: CommonAtts;
    skill: CommonAtts;
}

// Navigation widget types
type NavigationAtts = WidgetName | 'label';

// Settings widget types
interface SettingAtts {
    label: string;
    theme: Record<ThemeAtts, string>;
    language: Record<languageAtts, string>
}

type ThemeAtts = 'dark' | 'light';
type languageAtts = 'label';

// Profile widget types
interface ProfileAtts {
    utility: Record<UtilityAtts, string>;
    information: Record<InformationAtts, string>;
}

type UtilityAtts = 'cv' | 'contactInfo';

type InformationAtts = 'facebook' | 'instagram' | 'email' | 'whatsapp' | 'copy';