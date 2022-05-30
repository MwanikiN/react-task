import NavLinks from "./NavLinks/NavLinks"
import "../../styles/Navbar.css"

function Navbar(){
    return (
    <nav className="nav">
        
        <h3 className="title"> Mwaniki</h3>
        <NavLinks />
    </nav>)
}
export default Navbar