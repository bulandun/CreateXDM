import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unblank the Canvas | Design Hackathon by DesignXDM",
  description:
    "Unblank the Canvas is a creative design hackathon by DesignXDM. Discover inspiring stories, develop original ideas and bring designs to life with your team.",
  openGraph: {
    title: "Unblank the Canvas — Design Hackathon",
    description: "Hack the ordinary. Discover, decode, design and deploy with DesignXDM.",
    type: "website"
  }
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
