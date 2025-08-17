import HamCSS from "..\\css\\hamb.module.css"
import { Link } from "react-router-dom"

function Hamburger({ hamStyles }) {
    const NavLink = ({ to, title }) => {
        return(
            <div className={HamCSS.link}>
                <Link to={`/${to}`}>
                    {title}
                    <ion-icon name="arrow-forward"></ion-icon>
                </Link>
            </div>
        )
    }

    return(
        <div 
         className={hamStyles}>
            <div className={HamCSS.hamb_menu}>
                <div className={HamCSS.logo}>
                    <div>
                        <h3>Erni Detailing</h3>
                        <p>ernidetailing@gmail.com</p>
                    </div>
                </div>
                <div className={HamCSS.linkovi}>
                    <NavLink to="" title="Naslovna" />
                    <NavLink to="detailing-vozila" title="Detailing Vozila" />
                    <NavLink to="detailing-brodova" title="Detailing brodova" />
                    <NavLink to="kontakt" title="Kontakt" />
                </div>
            </div>
        </div>        
    )
}

export default Hamburger