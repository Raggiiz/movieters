import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Movieters</Link>
            <Link className="favs" to="/favorites">My Movies</Link>
        </header>
    );
}

export default Header;
