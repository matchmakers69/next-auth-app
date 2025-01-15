import { Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { type Metadata } from "next/types";
import SessionProvider from "@/components/providers/SessionProvider/SessionProvider";
import ToasterProvider from "@/components/providers/ToasterProvider";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
      <body className={`${PoppinsFont.className} body-app scroll-touch`}>
        <ToasterProvider />
        <ProgressBarProvider>
          <SessionProvider>{children}</SessionProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
