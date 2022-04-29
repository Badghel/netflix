import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner"
import { get } from "../utils/httpclients";



export function MovieDetails() {
  const {movieId}=useParams();
  const [movie,setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState (true);

    
    
  useEffect(()=>{
    setIsLoading(true); /* Cargando la pelicula */
    get("/movie/"+ movieId).then(data=>{
      setIsLoading(false);/* Cuando ya cargo se vuelve false */
      setMovie(data);
    });

  }, [movieId])
  if(isLoading){
    return <Spinner />;
    
  }
  if(!movie){
    return null;
  }
  const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImg}`} src={imgUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.MovieDetails}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>GENRES: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
          {
            <p>
              <strong>Descripcion: </strong>
              {movie.overview}
            </p>
          }
        </p>
      </div>
    </div>
  );
}
