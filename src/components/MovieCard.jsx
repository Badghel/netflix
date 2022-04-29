import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css"

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/"+movie.id}><img className={styles.movieImg} src={imgUrl} alt={movie.title} height={345} width={230} />
      <div>{movie.title}</div></Link>
    </li>
  );
}
