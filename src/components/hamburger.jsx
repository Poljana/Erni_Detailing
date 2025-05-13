import HamCSS from "..\\css\\hamb.module.css"
import { Link } from "react-router-dom"

function Hamburger() {
    const NavLink = ({ to, title }) => {
        return(
            <div className={HamCSS.link}>
                <Link to={`/${to}`}>{title}</Link>
                <ion-icon name="arrow-forward"></ion-icon>
            </div>
        )
    }

    return(
        <div className={HamCSS.container}>
            <div className={HamCSS.hamb_menu}>
                <div className={HamCSS.logo}>
                    <img src="src\assets\image1.png" alt="logo" />
                    <div>
                        <h3>Erni Detailing</h3>
                        <p>ernidetailing@gmail.com</p>
                    </div>
                </div>
                <div>
                    <NavLink to={null} title="Naslovna" />
                    <NavLink to="detailing-vozila" title="Detailing Vozila" />
                    <NavLink to="detailing-brodova" title="Detailing brodova" />
                    <NavLink to="kontakt" title="Kontakt" />
                </div>
            </div>
        </div>        
    )
}

export default Hamburger