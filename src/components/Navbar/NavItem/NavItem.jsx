import "./NavItem.css"

function NavItem({name, path}){
    return( 
    <li className="nav-item">
        <a className='intro-nav' href={path}>{name}</a>
    </li>);
}
export default NavItem