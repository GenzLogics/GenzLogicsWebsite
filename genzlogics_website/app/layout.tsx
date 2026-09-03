import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenZLogics | Software & Digital Solutions",
  description:
    "GenZLogics is a software company that builds solutions for all kinds of business problems — from AI and automation to web, mobile, cloud, and digital marketing.",
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
