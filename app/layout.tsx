import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Angelina Leite",
  description: "Artiste visuelle & réalisatrice",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}