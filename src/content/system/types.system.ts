import { WidgetName } from "../types.content";

interface CommonAtts {
    sourceLabel?: string;
    linkLabel?: string;
    chartLabel: string;
    description?: string;
    modalLabel?: string;
}

export interface SystemLanguage {
    navigation: Record<NavigationAtts, string>;
    profile: ProfileAtts;
    education: CommonAtts
    experience: CommonAtts;
    project: CommonAtts;
    skill: CommonAtts;
    language: CommonAtts;
    certificate: CommonAtts;
}

// Navigation widget types
type NavigationAtts = WidgetName | 'label';

// Profile widget types
interface ProfileAtts {
    utility: Record<UtilityAtts, string>;
    information: Record<InformationAtts, string>;
}

type UtilityAtts = 'cv' | 'contactInfo';

type InformationAtts = 'gitHub' | 'linkedIn' | 'facebook' | 'instagram' | 'email' | 'whatsapp' | 'copy';