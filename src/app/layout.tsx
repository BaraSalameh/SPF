import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Albaraa's Portfolio",
    description: "Built to showcase my career"
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => children

export default RootLayout;