import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "GenZLogics | Software & AI Solutions", template: "%s | GenZLogics" },
  description: "GenZLogics builds practical software, AI systems, automation, web applications, and digital products for modern businesses.",
  metadataBase: new URL("https://genzlogics.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full">{children}</body></html>;
}
