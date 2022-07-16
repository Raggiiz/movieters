
// https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=1b717a14cb31ceb1ea37d749857e0448&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api; 