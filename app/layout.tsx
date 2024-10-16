import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
        default : siteConfig.name,
        template: `%s | ${siteConfig.name}`, // %s est un placeholder qui sera remplacé par le titre de la page + le titre par defaut
    },
    description: siteConfig.description,
    icons: [
        {
            url: "/logo.svg",
            href: "/logo.svg",
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
