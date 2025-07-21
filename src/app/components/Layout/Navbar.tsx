"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-yellow-400">
          🎬 MovieFinder
        </Link>
        <a
          href="https://www.omdbapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
        >
          Powered by OMDb API
        </a>
      </div>
    </nav>
  );
}
