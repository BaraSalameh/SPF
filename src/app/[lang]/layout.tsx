'use client'

import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import { notFound, useParams } from "next/navigation";
import { Language } from "@/components/types";
import { ReactNode } from "react";
import { ScrollSpy } from "@/components/shared/ScrollSpy";
import { LanguageProvider } from "@/lib/contexts/LanguageProvider";
import { LangToggle, ThemeToggle } from "@/components/ui";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const supportedLangs = ['en', 'ar', 'tr'];

const PortfolioLayout = ({children}: {children: ReactNode}) => {
    
    const { lang } = useParams<{ lang: Language}>();
    
    if (!supportedLangs.includes(lang)) {
        notFound();
    }

    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    return (
        <html lang={lang} dir={dir} suppressHydrationWarning>
            <body className={`bg-light-background dark:bg-dark-background ${geistSans.variable} ${geistMono.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <LanguageProvider>
                        <ScrollSpy />
                        <div className="fixed z-1 rounded-full h-20 w-20 -top-10 -left-10 bg-light-sub-component dark:bg-dark-sub-component">
                            <div className="absolute top-3/4 left-3/4 -translate-3/4">
                                <ThemeToggle />
                            </div>
                        </div>
                        <div className="fixed z-1 rounded-full h-20 w-20 -top-10 -right-10 bg-light-sub-component dark:bg-dark-sub-component">
                            <div className="absolute top-3/4 left-1/4 -translate-y-3/4 -translate-x-1/4">
                                <LangToggle />
                            </div>
                        </div>
                        <main>{children}</main>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default PortfolioLayout;