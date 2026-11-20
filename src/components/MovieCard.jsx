import '../css/MovieCard.css'

function MovieCard({movie}){
    const IMG_BASE = "https://image.tmdb.org/t/p/w500";

    function onFavoriteClick(){
        alert("clicked");
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤️
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