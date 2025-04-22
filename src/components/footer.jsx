import FootCSS from "..\\css\\footer.module.css"
import { Link } from "react-router-dom"

function Footer() {

    const LinkList = ({imeListe, children}) => {
        return(
            <ul>
                <li>{imeListe}</li>
                {children}
            </ul>
        )
    }

    const FooterLink = ({url, tekst}) => {
        return(
            <li>
                <Link to={url}>{tekst}</Link>
            </li>
        )
    }

    return(
        <div className={FootCSS.footer}>
            <div>
                <div>
                    <p>Erni Detailing</p>
                    <p>
                        Doživite prestiž profesionalno očišćenih vozila i brodova 
                        koji zrače elegancijom i profinjenošću u svakom detalju.
                    </p>
                </div>
                <div>
                    <LinkList imeListe="Stranica">
                        <FooterLink tekst="Usluge" />
                        <FooterLink tekst="Cjenik" />
                        <FooterLink tekst="O nama" />
                    </LinkList>
                    <LinkList imeListe="Kontakt">
                        <FooterLink tekst="Ponuda" />
                        <FooterLink tekst="Obrazac" />
                        <FooterLink tekst="Email" />
                    </LinkList>
                    <LinkList imeListe="Društvene Mreže">
                        <FooterLink tekst="Facebook" />
                        <FooterLink tekst="Instagram" />
                        <FooterLink tekst="Twitter" />
                        <FooterLink tekst="Youtube" />
                    </LinkList>
                </div>
            </div>
            <div>
                <div>
                    <p>Erni Detailing © 2025</p>
                </div>
                <div>
                    <ul>
                        <FooterLink tekst="Uvjeti korištenja" />
                        <FooterLink tekst="Pravila privatnosti" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer