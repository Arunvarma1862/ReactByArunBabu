import React from "react";
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  console.log(params.imdbId);
  const singleMovieDetailReponse = `http://www.omdbapi.com/?apikey=${apikey}&i=${params.imdbId}`;
  try {
    const response = await axios(singleMovieDetailReponse);
    console.log(response);
    return { singleDetailsData: response.data, isError: false, error: "" };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "something went wrong";
    return { singleDetailsData: null, isError: true, error: errorMessage };
  }
}

function SingleMoviePage() {
  const { singleDetailsData, isError, error } = useLoaderData();
  console.log(singleDetailsData)
  if (singleDetailsData && singleDetailsData.Response === "False") {
    return <h1>{singleDetailsData.Error}</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div>{singleDetailsData.Title}</div>
    </>
  );
}

export default SingleMoviePage;
