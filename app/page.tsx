import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen p-8">
      
      {/* Nom + description */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Angelina Leite</h1>
        <p className="text-sm">Artiste visuelle & réalisatrice</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-2">
        <Link href="/filmographie">Filmographie</Link>
        <Link href="/photographie">Photographie</Link>
        <Link href="/musique">Musique</Link>
        <Link href="/ateliers">Ateliers et résidences</Link>
        <Link href="/about">About</Link>
      </nav>

    </main>
  );
}