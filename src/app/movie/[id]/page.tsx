// src/app/movie/[id]/page.tsx
import { fetchMovieDetails } from "@/app/utils/api";
import { MovieDetail } from "@/app/types/movie";
import MovieDetailCard from "@/app/components/MovieDetailCard";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MoviePageProps) {
  const movie = await fetchMovieDetails(params.id);
  return {
    title: movie.Title || "Movie Not Found",
    description: movie.Plot || "Details about the selected movie.",
    openGraph: {
      title: movie.Title,
      description: movie.Plot,
      images: movie.Poster !== "N/A" ? [movie.Poster] : [],
    },
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie: MovieDetail = await fetchMovieDetails(params.id);

  if (!movie.Title) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-500">Movie not found</h2>
        <MovieDetailCard
          movie={
            {
              Title: "",
              Poster: "",
              Plot: "",
              Year: "",
              Genre: "",
              Runtime: "",
              Director: "",
              Actors: "",
            } as MovieDetail
          }
        />
      </div>
    );
  }

  return <MovieDetailCard movie={movie} />;
}
