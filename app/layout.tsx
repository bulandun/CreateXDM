import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative XDM — AI-Native Creative Agency",
  description:
    "Creative XDM is an AI-native creative agency crafting cinematic video, visual campaigns, and creative technology for modern brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
