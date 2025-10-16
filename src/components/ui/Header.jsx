import { NavLink, Link } from "react-router-dom";

const links = [
    { to: "/about", label: "About" },
    { to: "/media", label: "Media" },
    { to: "/events", label: "Upcoming Events" },
    { to: "/contact", label: "Contact" },
];

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link className="logo" to="/">REACT-SB-BOILER</Link>

                <nav aria-label="Primary">
                    <ul className="nav">
                        {links.map((l) => (
                            <li key={l.to}>
                                <NavLink
                                    to={l.to}
                                    end
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    {l.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;