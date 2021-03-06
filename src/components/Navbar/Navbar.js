import { Link } from 'react-router-dom';
import './Nabvar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">STOCKEATE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="">Agregar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/productos">Productos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;