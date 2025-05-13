import NavCSS from "..\\css\\navigation.module.css"
import HamCSS from "..\\css\\hamb.module.css"
import { Link, useLocation } from "react-router-dom"
import Hamburger from "./hamburger"
import { useEffect, useState } from "react"

function NavBar() {
    const [visibility, setVisibility] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setVisibility(false)
    }, [location.pathname])

    const NavLink = ({url, tekst}) => {
        return(
            <li className={`${location.pathname === url ? NavCSS.active : NavCSS.link}`}>
                <Link to={url}>{tekst}</Link>
            </li>
        )
    }

    return(
        <>
        <div className={`${NavCSS.navBar} ${visibility ? NavCSS.withHamburger : null}`}>
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
                <button className={NavCSS.hamburger} onClick={() => setVisibility(!visibility)}>
                    <ion-icon name="menu"></ion-icon>
                </button>
            </div>
        </div>
        <Hamburger 
         visibility={visibility} 
         hamStyles={`
            ${HamCSS.container} 
            ${visibility ? HamCSS.visible : HamCSS.hidden}
         `}
        />
        </>
        
    )
}

export default NavBar