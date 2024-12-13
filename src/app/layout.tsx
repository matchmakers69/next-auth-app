import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { type Metadata } from "next/types";
import SessionProvider from "@/components/providers/SessionProvider";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  keywords: [
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "Przemek Lewtak",
  ],
  authors: [
    {
      name: "Przemek Lewtak",
      url: "https://github.com/matchmakers69",
    },
  ],
  creator: "Przemek Lewtak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IbmPlex.className}`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
