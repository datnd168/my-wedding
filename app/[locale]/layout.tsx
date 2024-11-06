import cx from "classnames";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import FadeInSection from "@/components/shared/FadeInSection";
import { inter, sacra, sfPro } from "../fonts";

import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Đình Đạt - Hải Yến",
  themeColor: "#FFF",
  description: "Lễ thành hôn của Đình Đạt và Hải Yến",
  metadataBase: new URL("https://datyen.vercel.app/"),
  openGraph: {
    type: "website",
    siteName: "Đình Đạt - Hải Yến",
    url: "https://datyen.vercel.app/",
    images: "https://datyen.vercel.app/assets/base.jpg",
  },
  twitter: {
    site: "@site",
    title: "Đình Đạt - Hải Yến",
    description: "Lễ thành hôn của Đình Đạt và Hải Yến",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={cx(sfPro.variable, inter.variable, sacra.variable)}>
        <main className="min-h-screen w-full">
          <FadeInSection>{children}</FadeInSection>
        </main>
      </body>
    </html>
  );
}
