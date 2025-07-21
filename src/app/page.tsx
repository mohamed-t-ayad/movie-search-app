// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import MovieCard from "./components/MovieCard";
import { fetchMovies } from "./utils/api";
import { MovieSummary } from "./types/movie";

export default function Home() {
  const [allMovies, setAllMovies] = useState<MovieSummary[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieSummary[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  // Load default movies on first mount
  useEffect(() => {
    async function loadDefaultMovies() {
      const data = await fetchMovies("Avengers");
      if (data.Response === "True") {
        setAllMovies(data.Search);
        setFilteredMovies(data.Search);
        setError("");
      } else {
        setError("Failed to load default movies.");
      }
    }
    loadDefaultMovies();
  }, []);

  // Handle search input
  const handleSearch = async (query: string) => {
    const q = query.trim().toLowerCase();

    if (!q) {
      setFilteredMovies(allMovies); // Reset to full list
      setError("");
      return;
    }

    // Filter locally
    const matched = allMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(q)
    );

    if (matched.length > 0) {
      setFilteredMovies(matched);
      setError("");
    } else {
      // Optional fallback: Call API if no local match
      const data = await fetchMovies(query, page);
      if (data.Response === "True") {
        setFilteredMovies(data.Search);
        setError("");
      } else {
        setFilteredMovies([]);
        setError(data.Error || "No results found.");
      }
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Search</h1>
      <div className="mx-auto text-center">
        <SearchInput onSearch={handleSearch} />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} /> 
        ))}
      </div>
    </main>
  );
}
