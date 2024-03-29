import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../containers/sidebar";

const Quicksand = localFont({
  src: "../public/fonts/Quicksand-Regular.ttf",
  weight: "700",
  variable: "--font-Quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mahshid Asoudehkhah",
    template: "%s | Mahshid Asoudehkhah",
  },
  description: "Graphic designer",
  openGraph: {
    title: "Mahshid Asoudehkhah",
    description: "Graphic designer",
    url: "https://mahshidasoudehkhah.com/",
    siteName: "Mahshid Asoudehkhah",
    // images: [
    //   {
    //     url: "https://leerob.io/og.jpg",
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mahshid Asoudehkhah",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/micon.png",
  },
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black  bg-white dark:text-white dark:bg-[#111010] font-Quicksand",
        Quicksand.variable,
        "font-Quicksand"
      )}
    >
      <body className="bg-customGray flex flex-row-reverse h-screen  ">
        <Sidebar />
        <main className="flex-auto w-screen  md:mt-0 flex flex-col   h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
