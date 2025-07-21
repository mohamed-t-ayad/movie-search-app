// src/app/types/movie.d.ts

export interface MovieSummary {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  export interface MovieDetail extends MovieSummary {
    Genre: string;
    Plot: string;
    Runtime: string;
    Director: string;
    Actors: string;
  }
  