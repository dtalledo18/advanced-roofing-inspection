import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-urbanist",
    display: "swap",
});

const clash = localFont({
    src: "../../public/fonts/ClashGrotesk-Bold.woff2",
    variable: "--font-clash",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Free Roof Inspection | Advanced Roofing Inspections",
    description: "Schedule your free roof inspection now. Trusted by homeowners in Chicago.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${urbanist.variable} ${clash.variable} h-full antialiased scroll-smooth`}
        >
        <body className="min-h-full flex flex-col font-urbanist bg-black text-white">
        {children}
        </body>
        </html>
    );
}