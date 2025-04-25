import HomeCSS from "..\\css\\home.module.css"
import { Link } from "react-router-dom"
import Card1 from "../components/card1"

function Home() {

    const KarticaBroj = ({broj, tekst}) => {
        return(
            <div className={HomeCSS.kartica_br}>
                <p className={HomeCSS.broj}>{broj}</p>
                <p className={HomeCSS.tekst}>{tekst}</p>
            </div>
        )
    }

    const Odlike = ({img, title, opis}) => {
        return(
            <div className={HomeCSS.odlika}>
                <div className={HomeCSS.subtitle}>
                    <img src={img} alt="image" />
                    <p>{title}</p>
                </div>
                <p>{opis}</p>
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
            <h2>Naše Usluge</h2>
            <div className={HomeCSS.nase_usluge}>                
                 <Card1 
                 title="Detailing vozila"
                 desc="Priuštite svom vozilu temeljito ručno 
                 pranje i profesionalnu zaštitu površine"
                />
                <Card1 
                 title="Detailing brodova"
                 desc="Osigurajte svojoj jahti ili brodu 
                 vrhunski tretman koji zaslužuje."
                />
            </div>
            <div className={HomeCSS.odlike}>                
                <div className={HomeCSS.kartice}>
                    <h2>Zašto izabrati Nas?</h2>
                    <Odlike 
                     img="src\assets\Precision.png" 
                     title="Precizan rad"
                     opis="Održavamo najviše standarde
                     profesionalnosti pri detailingu vaših vozila i plovila."
                    />
                    <Odlike 
                     img="src\assets\Diamond.png" 
                     title="Premium proizvodi i usluge"
                     opis="Osigurajte dugovječnost vaše
                     imovine s periodičnim tretmanom detailinga
                     i zaštite svih površina."
                    />
                    <Odlike 
                     img="src\assets\Security.png" 
                     title="Visoka razina sigurnosti i privatnosti"
                     opis="Razumijemo važnost privatnosti i sigurnosti
                     za klijente koji nam povjeravaju svoja
                     luksuzna vozila i plovila."
                    />
                </div>
                <img src="src\assets\image2.png" alt="image2" />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Home