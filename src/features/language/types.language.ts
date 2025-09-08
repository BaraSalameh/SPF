export type Level = 1 | 2 | 3 | 4;

export interface CommonLanguageAtts  {
    level: Level;
    logoUrl: string;
}

export interface LanguageAtts  {
    name: string;
    proficiency: string;
}