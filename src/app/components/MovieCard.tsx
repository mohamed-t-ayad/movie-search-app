// src/app/components/MovieCard.tsx
import Link from "next/link";
import { MovieSummary } from "../types/movie";
import Image from "next/image";

export default function MovieCard({
  Title,
  Year,
  Poster,
  imdbID,
}: MovieSummary) {
  return (
    <Link href={`/movie/${imdbID}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col h-full">
        <Image
          src={Poster}
          alt={Title}
          width={400}
          height={600}
          className="w-full object-cover"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold hover:text-yellow-600">{Title}</h3>
          <p className="text-sm text-gray-400">{Year}</p>
        </div>
      </div>
    </Link>
  );
}
