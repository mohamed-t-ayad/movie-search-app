// src/app/movie/[id]/page.tsx
import { fetchMovieDetails } from "@/app/utils/api";
import { MovieDetail } from "@/app/types/movie";
import MovieDetailCard from "@/app/components/MovieDetailCard";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>; 
}) {
  const { id } = await props.params; 
  const movie = await fetchMovieDetails(id);

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

export default async function MoviePage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const movie: MovieDetail = await fetchMovieDetails(id);

  if (!movie.Title) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-500">Movie not found</h2>
      </div>
    );
  }

  return <MovieDetailCard movie={movie} />;
}
