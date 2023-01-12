import { Link } from "react-router-dom"
export default function Menu()
{
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to={"/menu"}>Menu</Link>
                        <Link className="nav-link active" aria-current="page" to={"/users"}>Listes Des Utilisateur</Link>
                        <Link className="nav-link active" aria-current="page" to={"/create"}>Creer Utilisateur</Link>
                        <Link className="nav-link active" aria-current="page" to={""}>Listes Des Tâches</Link>
                        <Link className="nav-link active" aria-current="page" to={""}>Deconnecter</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}