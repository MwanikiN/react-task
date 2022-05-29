import NavLinks from "./NavLinks/NavLinks"
import me from "../../assets/pic.jpg";
import "../../styles/Navbar.css"

function Navbar(){
    return (
    <nav className="nav">
        <div className="nav-logo">
            <img src={me} alt="Me" />
        </div>
        <h3 className="title"> MimowaMwaniki</h3>
        <NavLinks />
    </nav>)
}
export default Navbar