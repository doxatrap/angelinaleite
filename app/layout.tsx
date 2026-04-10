import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelina Leite",
  description: "Artiste visuelle & réalisatrice",

  icons: {
    icon: "/favicon.ico.gif",
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