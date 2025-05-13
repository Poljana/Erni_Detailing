import NavCSS from "..\\css\\navigation.module.css"
import { Link, useLocation } from "react-router-dom"
import Hamburger from "./hamburger"

function NavBar() {
    const location = useLocation()

    const NavLink = ({url, tekst}) => {
        return(
            <li className={`${location.pathname === url ? NavCSS.active : NavCSS.link}`}>
                <Link to={url}>{tekst}</Link>
            </li>
        )
    }

    return(
        <>
        <div className={NavCSS.navBar}>
            <img src="src\assets\image1.png" alt="logo" className={NavCSS.logo} />
            <ul className={NavCSS.linkovi}>
                <NavLink url="/" tekst="Naslovna" />
                <NavLink url="/detailing-vozila" tekst="Detailing Vozila" />
                <NavLink url="/detailing-brodova" tekst="Detailing Brodova" />
                <NavLink url="/kontakt" tekst="Kontakt" />                
            </ul>
            <div className={NavCSS.on_mobile}>
                <Link to="/kontakt">
                <button className={NavCSS.rezerviraj}>Rezerviraj</button>
                </Link>
                <button className={NavCSS.hamburger}>
                    <ion-icon name="menu"></ion-icon>
                </button>
            </div>
        </div>
        <Hamburger />
        </>
        
    )
}

export default NavBar