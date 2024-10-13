import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motto",
  description: "Your virtual friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
