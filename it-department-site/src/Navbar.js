export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site</a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/programs">Programs</a>
            </li>
            <li>
                <a href="/faculty">Faculty</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}