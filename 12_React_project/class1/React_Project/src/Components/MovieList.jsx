import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieCard.module.css"

function MovieList({ data }) {
  const { movieApiResponse , isError ,error} = data;

if(!movieApiResponse && isError===true){
  return <h1>{error}</h1>
}

  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "No result found"}</h1>;
  }

  return (
    <div  className={styles.moviecard}>
      {movieApiResponse.Search.map((movie) => {
        return <MovieCard key={movie.imdbID} {...movie}  / >;
      })}
    </div> 
  );
}

export default MovieList;
