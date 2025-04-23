import HomeCSS from "..\\css\\home.module.css"
import { Link } from "react-router-dom"

function Home() {

    const KarticaBroj = ({broj, tekst}) => {
        return(
            <div className={HomeCSS.kartica_br}>
                <p className={HomeCSS.broj}>{broj}</p>
                <p className={HomeCSS.tekst}>{tekst}</p>
            </div>
        )
    }

    return(
        <div className={HomeCSS.home}>
            <div className={HomeCSS.title}>
                <h1>Najbolji detailing u Hrvatskoj</h1>
                <p>
                    ERNI DETAILING postavlja nove standarde u njezi 
                    luksuznih površina. Naša stručnost i predanost
                    detaljima pretvaraju vašu imovinu u besprijekorni
                    odraz elegancije.
                </p>
                <button className={HomeCSS.kontakt}>
                    <Link to="/kontakt">
                        <p>Kontaktirajte nas</p>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </Link>
                </button>
            </div>
            <div className={HomeCSS.video}>
                <video controls>
                    <source src="#" type="videp/mp4" />
                    Your browser does not support this video tag.
                </video>
            </div>
            <div className={HomeCSS.cetiri_kartice}>
                <KarticaBroj broj="01" tekst="Kvaliteta ZAJAMČENA" />
                <KarticaBroj broj="02" tekst="Prirodno PRIHVATLJIVO" />
                <KarticaBroj broj="03" tekst="Brzi PROCES" />
                <KarticaBroj broj="04" tekst="Izuzetno POVOLJNO" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Home