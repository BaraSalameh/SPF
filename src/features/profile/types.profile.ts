export type ContactInformation = {
    email: string;
    mobile: string;
    whatsapp: string;
}

export type PersonalInformation = {
    birthdate: string;
}

type website = {
    website: string;
    icon: string;
}
export type SocialMedia = {
    facebook?: website;
    instagram?: website;
    whatsapp?: website;
    email?: website;
}

export interface commonUtilityAtts  {
    resume: website;
    personalInformation : PersonalInformation;
    contactInformaion: ContactInformation;
    socialMedia?: SocialMedia;
}

export type UtilityAtts = {
    cv: string;
    contactInfo: string;
    goTo: string;
}