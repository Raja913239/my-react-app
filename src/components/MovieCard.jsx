import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}){
    const IMG_BASE = "https://image.tmdb.org/t/p/w500";

    const {isFavorite, removeFavorites, addFavorites} = useMovieContext();

    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFavorites(movie.id)
        else addFavorites(movie)
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className= {`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;