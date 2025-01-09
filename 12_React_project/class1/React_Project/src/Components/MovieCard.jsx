import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ Poster, imdbID }) {
  return (
    <div>
      <Link to={`/detail/${imdbID}`}>
        <img src={Poster} alt="image" style={{ height: "250px" }} />
      </Link>
    </div>
  );
}

export default MovieCard;
