import { NavLink } from "react-router"

function Header() {
    return (
        <nav className="nav-bar">
            <NavLink to={"/"}>Accueil</NavLink>
            <NavLink to={"/newPost"}>Ajouter un post</NavLink>
        </nav>
    )
}

export default Header