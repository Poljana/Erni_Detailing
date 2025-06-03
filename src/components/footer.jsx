import FootCSS from "..\\css\\footer.module.css"
import { Link } from "react-router-dom"

function Footer() {

    const LinkList = ({imeListe, children}) => {
        return(
            <ul className={FootCSS.link_lista}>
                <li style={{fontSize: "14px", color: "#999999"}}>{imeListe}</li>
                {children}
            </ul>
        )
    }

    const FooterLink = ({url, tekst}) => {
        return(
            <li className={FootCSS.footer_link}>
                <Link className={FootCSS.footer_link} to={url}>{tekst}</Link>
            </li>
        )
    }

    return(
        <div className={FootCSS.footer}>
            <div className={[FootCSS.container, FootCSS.border_bottom].join(" ")}>
                <div className={FootCSS.subcontainer1}>
                    <p style={{marginBottom: "1rem"}}>Erni Detailing</p>
                    <p className={FootCSS.citat}>
                        Doživite prestiž profesionalno očišćenih vozila i brodova 
                        koji zrače elegancijom i profinjenošću u svakom detalju.
                    </p>
                </div>
                <div className={FootCSS.subcontainer}>
                    <LinkList imeListe="Društvene Mreže">
                        <FooterLink tekst="Facebook" />
                        <FooterLink tekst="Instagram" />
                        <FooterLink tekst="Youtube" />
                    </LinkList>                    
                    <LinkList imeListe="Kontakt">
                        <p>ernidetailing@gmail.com</p>
                        <FooterLink url="/kontakt" tekst="Kontaktiraj" />
                    </LinkList>
                </div>
            </div>
            <div className={FootCSS.container}>
                <div className={FootCSS.subcontainer}>
                    <p style={{fontSize: "14px"}}>Erni Detailing © 2025</p>
                </div>
            </div>
        </div>
    )
}

export default Footer