import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenZLogics | IT & Digital Solutions",
  description:
    "GenZLogics delivers end-to-end technology and digital marketing solutions, helping businesses grow, scale, and compete globally.",
  metadataBase: new URL("https://genzlogics.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
