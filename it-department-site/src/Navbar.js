import { Link } from "react-router-dom";
import logo from "./bc_logo.png";

export default function Navbar() {
    return <nav className="nav">

        <Link to="/" className="site-title">
            <img src={logo} alt="Broward College logo" className="site-logo" />
        </Link>

        <input type="checkbox" id="sidebar-active"></input>

        <label for="sidebar-active" class="open-sidebar-btn">
            <i class="fa fa-solid fa-bars"></i>
        </label>

        <label id="overlay-sidebar" for="sidebar-active"></label>  
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