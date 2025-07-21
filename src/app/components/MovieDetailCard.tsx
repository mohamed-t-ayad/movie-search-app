// src/components/MovieDetailCard.tsx
"use client";

import { MovieDetail } from "@/app/types/movie";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface MovieDetailCardProps {
  movie: MovieDetail;
  showBackButton?: boolean;
}

export default function MovieDetailCard({ movie, showBackButton = true }: MovieDetailCardProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {showBackButton && (
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition mb-6"
        >
          <ArrowLeft size={18} />
          Back to Search
        </Link>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/images/no-poster-available.jpg"}
          alt={movie.Title}
          width={300}
          height={450}
          className="rounded-lg shadow-lg object-cover"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{movie.Title}</h1>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Year:</span> {movie.Year}</p>
            <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
            <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
            <p><span className="font-semibold">Director:</span> {movie.Director}</p>
            <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Plot</h2>
            <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
