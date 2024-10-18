import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";

const rubikFont = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frontend Quiz Game",
  description: "Test your programming knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`box-border flex justify-center w-screen h-screen overflow-x-hidden py-4 lg:py-14 bg-bg-light bg-no-repeat bg-cover dark:bg-text-color dark:bg-bg-dark ${rubikFont.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <main className="box-border w-[95vw] lg:w-[80vw]">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
