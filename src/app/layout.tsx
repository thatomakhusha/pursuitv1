import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pursuit — Track Your Career Journey",
  description:
    "Pursuit helps you organise, track, and manage your job applications in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}