import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Site</Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/programs">Programs</Link>
            </li>
            <li>
                <Link to="/faculty">Faculty</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
}