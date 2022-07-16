import { Link } from 'react-router-dom';
import './error.css';

function Error() {
    return (
        <div className='error'>
            <h3>Page not found</h3>
            <Link className="logo" to="/">See all movies now playing</Link>
        </div>
    );
}

export default Error;
