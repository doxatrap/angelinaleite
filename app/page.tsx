"use client";


import { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [entered, setEntered] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);


  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setEntered(true);
    }, 600); // fade OUT uniquement image
  };


  return (
    <main className="bg-white text-black min-h-screen">


      {/* IMAGE INTRO */}
      {!entered && (
        <div
          className="flex items-center justify-center h-screen cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="/logoo.jpg"
            alt="Entrer"
            className={`w-[80vw] max-w-4xl h-auto rounded-2xl blur-sm hover:blur-0 transition duration-500 ease-out hover:scale-105
            ${fadeOut ? "animate-fade-out" : "animate-fade-in"}`}
          />
        </div>
      )}


      {/* MENU (aucun effet) */}
      {entered && (
        <div className="p-8">


          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Angelina Leite</h1>
            <p className="text-sm">Artiste visuelle & réalisatrice</p>
          </div>


          <nav className="flex flex-col space-y-2">
            <Link href="/filmographie">Filmographie</Link>
            <Link href="/photographie">Photographie</Link>
            <Link href="/musique">Musique</Link>
            <Link href="/ateliers">Ateliers et résidences</Link>
            <Link href="/about">About</Link>
          </nav>


        </div>
      )}


    </main>
  );
}
