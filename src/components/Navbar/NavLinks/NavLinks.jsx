import { links } from "../../../constants/links";
import NavItem from "../NavItem/NavItem";
import "../../../styles/NavLinks.css"


function NavLinks(){
    return(
    <ul className="nav-links">
        {Object.keys(links).map((key) => {
            const link = links[key];
            return (<NavItem key={link.path} name={link.name} path={link.path}/>)
        })}
    </ul>
    )
}

export default NavLinks