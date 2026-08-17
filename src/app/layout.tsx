import type { Metadata } from "next";
import "./globals.css";

const WEBSITE_URL=process.env.WEBSITE_URL

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Wedding Invitation of Claribel & Josh",

  openGraph: {
    title: "Wedding Invitation",
    description: "Wedding Invitation of Claribel & Josh",
    images: [
      {
        url: `${WEBSITE_URL}/assets/envelope-button.webp`,
        width: 500,
        height: 500,
        alt: "Wedding Invitation",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: [`${WEBSITE_URL}/assets/envelope-button.webp`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
