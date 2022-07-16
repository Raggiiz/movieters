import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './favorites.css';
import { toast } from 'react-toastify';

function Favorites() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('@movieters');
        setMovies(JSON.parse(myList) || [])
    }, [])

    function deleteMovie(id) {
        let filterMovies = movies.filter((i) => {
            return (i.id !== id)
        });
        setMovies(filterMovies);
        localStorage.setItem('@movieters', JSON.stringify(filterMovies));
        toast.success('Movie deleted successfully!')
    }


    return (
        <div className='list-content'>
            <h1>My movies</h1>

            <div className='movie-list'>
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <div className='btns'>
                                <Link to={`/movie/${movie.id}`}>See more</Link>
                                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites;