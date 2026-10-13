import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/src/components/site/ScrollReveal";
import Chatbot from "@/src/components/landing/Chatbot";
import { ThemeProvider } from "@/src/components/site/ThemeProvider";
import ThemeScript from "@/src/components/site/ThemeScript";

export const metadata: Metadata = {
  title: { default: "GenZLogics | Software & AI Solutions", template: "%s | GenZLogics" },
  description: "GenZLogics builds practical software, AI systems, automation, web applications, and digital products for modern businesses.",
  metadataBase: new URL("https://genzlogics.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <ScrollReveal />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
