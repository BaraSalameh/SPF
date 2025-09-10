'use client'

import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import { notFound, useParams } from "next/navigation";
import { Language } from "@/components/types";
import { ReactNode } from "react";
import { Navigator, Settings } from "@/components/shared";

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
                    <div className={`fixed h-screen flex flex-col gap-10 justify-center z-1 ${dir === "ltr" ? 'left-5 sm:left-10' : 'right-5 sm:right-10'}`}>
                        <Navigator />
                        <Settings  />
                    </div>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default PortfolioLayout;