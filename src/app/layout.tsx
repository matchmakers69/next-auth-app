import { Bebas_Neue, Oswald, IBM_Plex_Sans_Condensed } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { auth } from "@/auth";
import { type Metadata } from "next/types";
import SessionProvider from "@/components/providers/SessionProvider/SessionProvider";
import ToasterProvider from "@/components/providers/ToasterProvider";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { LocalizationProvider } from "@/components/providers/LocalizationProvider";

const BebasFont = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: ["400"],
});

const IbmFont = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
  weight: ["300", "400", "500", "600"],
});

const OswaldFont = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["600", "700"],
});

const fonts = [BebasFont, IbmFont, OswaldFont];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const sessionKey = new Date().valueOf(); // Workaround to force re-render on session change
  return (
    <html lang="en">
      <body className={`${fontsClassName} body-app scroll-touch`}>
        <ToasterProvider />
        <ProgressBarProvider>
          <SessionProvider session={session} sessionKey={sessionKey}>
            <ReactQueryProvider>
              <LocalizationProvider>{children}</LocalizationProvider>
            </ReactQueryProvider>
          </SessionProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
