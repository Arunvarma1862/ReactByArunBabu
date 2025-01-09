import axios from 'axios'
import React from 'react'
import { apikey } from "../constants";
import { useLoaderData } from 'react-router-dom';
import styles from "./SingleMovieDetails.module.css"

export async function loader({params}){
  console.log(params)
 
  try{
     const singlemovieDeatilEndPoint= `http://www.omdbapi.com/?apikey=${apikey}&plot=full&i=${params.imdbId}`
    const response= await axios.get(singlemovieDeatilEndPoint)
    console.log(response)
    return {movieDeatil:response.data,isError:false,error:""}
  }
  catch(error){
    console.log(error)
    const errorMessage=error?.response?.data?.Error || error.message || "something went wrong"
    return {movieDeatil:null,isError:true,error:errorMessage}
  }
  }
  
function SinglemovieDeatil() {
  const data=useLoaderData()
  const {movieDeatil,isError,error}=data
  if (isError) {
    return <h1>{error}</h1>;
}
  if(movieDeatil && movieDeatil.Response==="False"){
    return <h1>{movieDeatil.Error || "not found"}</h1>
  }
    return (
      <div className={`container ${styles.movieDeatil}`}>
      <div className={styles.infoOnLeft}>
          <h2>{movieDeatil.Title}</h2>
          <img src={movieDeatil.Poster} alt={movieDeatil.Title} />

          <p className={styles.infoPara}>
              <span className={styles.key}>Release Date </span>
              <span className={styles.value}>{movieDeatil.Released}</span>
          </p>
          <p className={styles.infoPara}>
              <span className={styles.key}> Genre </span>
              <span className={styles.value}> {movieDeatil.Genre}</span>
          </p>
          <p className={styles.infoPara}>
              <span className={styles.key}>Runtime </span>
              <span className={styles.value}> {movieDeatil.Runtime}</span>
          </p>
          <p className={styles.infoPara}>
              <span className={styles.key}>Language </span>
              <span className={styles.value}>{movieDeatil.Language}</span>
          </p>

          <p className={styles.infoPara}>
              <span className={styles.key}>Awards </span>
              <span className={styles.value}> {movieDeatil.Awards}</span>
          </p>
      </div>
      <div className={styles.infoOnright}>
          <div className="plot">
              <div className={styles.bigInfo}>
                  <h3>Plot</h3>
                  <p>{movieDeatil.Plot}</p>
              </div>
              <div className={styles.bigInfo}>
                  <h3>Actors</h3>
                  <p>{movieDeatil.Actors}</p>
              </div>
              <div className={styles.bigInfo}>
                  <h3>Country</h3>
                  <p>{movieDeatil.Country}</p>
              </div>
              <h2>More Info</h2>
              <p className={styles.infoPara}>
                  <span className={styles.key}>Director </span>
                  <span className={styles.value}>
                      {movieDeatil.Director}
                  </span>
              </p>
              <p className={styles.infoPara}>
                  <span className={styles.key}>imdb Rating </span>
                  <span className={styles.value}>
                      {movieDeatil.imdbRating}
                  </span>
              </p>
              <p className={styles.infoPara}>
                  <span className={styles.key}>imdb Votes </span>
                  <span className={styles.value}>
                      {movieDeatil.imdbVotes}
                  </span>
              </p>
              <p className={styles.infoPara}>
                  <span className={styles.key}>Boxoffice </span>
                  <span className={styles.value}>
                      {movieDeatil.BoxOffice}
                  </span>
              </p>
              <p className={styles.infoPara}>
                  <span className={styles.key}>Metascore</span>
                  <span className={styles.value}>
                      {movieDeatil.Metascore}
                  </span>
              </p>
              <p className={styles.infoPara}>
                  <span className={styles.key}>Rated</span>
                  <span className={styles.value}>
                      {movieDeatil.Rated}
                  </span>
              </p>
          </div>
      </div>
  </div>
  )
}

export default SinglemovieDeatil