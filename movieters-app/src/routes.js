import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './components/header';
import Error from './pages/Error';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;