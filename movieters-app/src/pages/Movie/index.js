import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './movie-detail.css'

import api from '../../services/api';
import { toast } from 'react-toastify';

function Movie() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '1b717a14cb31ceb1ea37d749857e0448',
                    language: 'en-US'
                }
            }).then((res) => {
                setMovie(res.data);
                setLoading(false)
            }).catch(() => {
                navigate('/', { replace: true });
                return;
            })
        }

        loadMovie();

        return () => {

        }
    }, [navigate, id]);

    function saveMovie() {
        const myList = localStorage.getItem('@movieters');

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((saved) => saved.id === movie.id);

        if (hasMovie) {
            toast.warn('This movie is already on the list')
        } else {
            savedMovies.push(movie);
            localStorage.setItem('@movieters', JSON.stringify(savedMovies))
            toast.success('Saved successfully')
        }

    }

    if (loading) {
        <div className='loading-movie'>
            <h3>Loading movie...</h3>
        </div>
    }

    return (
        <div className='movie-content'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <p>Vote average:
                <strong className={movie.vote_average > 6 ? 'good-movie' : 'bad-movie'}>
                    {movie.vote_average}
                </strong>
            </p>
            <div className='button-area'>
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title}+trailer`} target="blank">
                        Watch trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie;