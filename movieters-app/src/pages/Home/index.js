import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '1b717a14cb31ceb1ea37d749857e0448',
                    language: 'en-US',
                    page: 1
                }
            })

            setMovies(response.data.results);
            setLoading(false)
        }

        loadMovies();
    }, [])

    if (loading) {
        return (
            <div className='loading'>
                <h3>Loading movies...</h3>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='movie-list'>
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>See more</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
