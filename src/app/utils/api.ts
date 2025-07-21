// src/app/utils/api.ts

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";


export const fetchMovies = async (query: string, page: number = 1) => {
  const res = await fetch(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const fetchMovieDetails = async (id: string) => {
  const res = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await res.json();
  return data;
};
