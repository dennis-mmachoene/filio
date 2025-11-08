import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filio",
  description: "Upload and manage files with Supabase Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}