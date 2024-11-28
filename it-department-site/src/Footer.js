import { Link } from "react-router-dom";
import logo from "./bc_logo.png";

export default function Navbar() {
    return <footer className="footer">

    <Link to="/" className="site-title">
            <img src={logo} alt="Broward College logo" className="site-logo" />
    </Link>

    <div className="footer-container">
        <div className="socialmedia-icons">
            <Link to="https://www.instagram.com/bctechadvantage/"><i class="fa fa-brands fa-instagram sm-icons"></i></Link>
            <Link to="https://www.facebook.com/BCTechAdvantage/"><i class="fa fa-brands fa-facebook sm-icons"></i></Link>
            <Link to="https://x.com/i/flow/login?redirect_after_login=%2FBCTechAdvantage"><i class="fa fa-brands fa-twitter sm-icons"></i></Link>
            <Link to="https://www.youtube.com/@browardcollegecsit6839"><i class="fa fa-brands fa-youtube sm-icons"></i></Link>
        </div>
    </div>


    </footer>
}