import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bara Salameh's Portfolio",
    description: "Built to showcase my personal hard, and soft kills"
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => children

export default RootLayout;