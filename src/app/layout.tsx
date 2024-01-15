import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontOutfit } from "@/lib/fonts";
import openGraphImage from "@/public/previews/mobile-preview.png";

export const metadata: Metadata = {
  title: "Arda Eker - NFT Preview Card Component Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the NFT Preview Card Component challenge on Frontend Mentor.",
  authors: [{ name: "Arda Eker", url: "https://www.ardaeker.com" }],
  metadataBase: new URL(
    "https://ardaeker-nft-preview-card-component-solution.vercel.app",
  ),
  openGraph: {
    type: "website",
    url: "/",
    title: "Arda Eker - NFT Preview Card Component Solution",
    description:
      "Hello, I'm Arda Eker. This website showcases my solution to the NFT Preview Card Component challenge on Frontend Mentor.",
    images: [
      {
        url: openGraphImage.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontOutfit.variable)}>{children}</body>
    </html>
  );
}
