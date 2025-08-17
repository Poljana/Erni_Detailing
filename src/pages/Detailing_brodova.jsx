import BrodCSS from "..\\css\\vozila.module.css"
import { Link } from "react-router-dom"
import Card2 from "../components/card2"
import Card3 from "../components/card3"
import { useEffect, useState } from "react"

function DetailingBrodova() {
    const [showCard, setShowCard] = useState(null)

    useEffect(() => {
        if (showCard) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showCard]);

    return(
        <>
        <div className={BrodCSS.pranje_automobila}>
            <div className={BrodCSS.naslovnica}>
                <h1>Neka vaš brod uvijek blista kao prvi dan</h1>
                <img src="src\assets\brod.png" alt="auto" />
                <p className={BrodCSS.citat}>
                "Jer čistoća nije luksuz - to je 
                standard koji vaš brod zaslužuje."
                </p>
                <button className={BrodCSS.kontakt}>
                    <Link to="/kontakt">
                        <p>Rezerviraj</p>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </Link>
                </button>
            </div>
            <div className={BrodCSS.paketi}>
                <h2>Paketi</h2>
                <Card2 
                 src="src\assets\brodovi001.png"
                 title="Dubinsko pranje i  vosak"
                 onClick={() => setShowCard(1)}
                >
                    <p>
                    Pranje <br />
                    Čišćenje protukliznih površina <br />
                    Čišćenje i zaštita sjedala ...                     
                    </p>
                </Card2>
                <Card2 
                 src="src\assets\brodovi002.png"
                 title="Poliranje i sjaj"
                 onClick={() => setShowCard(2)}
                >
                    <p>
                    Pranje <br />
                    Čišćenje protukliznih površina <br />
                    Čišćenje i zaštita sjedala ...                    
                    </p>
                </Card2>
                <Card2 
                 src="src\assets\brodovi003.png"
                 title="Besprijekorno sjajno"
                 onClick={() => setShowCard(3)}
                >
                    <p>
                    Pranje <br />
                    čišćenje protukliznih površina <br />
                    Čišćenje i zaštita sjedala ...
                    </p>
                </Card2>
            </div>
        </div>
        <Card3
         className={showCard == 1 ? "show_container" : "hide_container"}
         src="src\assets\brodovi001.png"
         title="Dubinsko pranje i  vosak"
         onClick={() => setShowCard(0)}
        >
            <li>Pranje</li>
            <li>Čišćenje protukliznih površina</li>
            <li>Čišćenje i zaštita sjedala</li>
            <li>Čišćenje pretinaca</li>
            <li>Uklanjanje pljesnji i vlage</li>
            <li>Poliranje inox-a</li>
            <li>Čišćenje trupa</li>
            <li>Čišćenje motora</li>
            <li>Aplikacija zaštitnog voska</li>
        </Card3>
        <Card3
         className={showCard == 2 ? "show_container" : "hide_container"}
         src="src\assets\brodovi002.png"
         title="Poliranje i sjaj"
         onClick={() => setShowCard(0)}
        >
            <li>Pranje</li>
            <li>Čišćenje protukliznih površina</li>
            <li>Čišćenje i zaštita sjedala</li>
            <li>Čišćenje pretinaca</li>
            <li>Uklanjanje pljesnji i vlage</li>
            <li>Poliranje inox-a</li>
            <li>Čišćenje trupa</li>
            <li>Čišćenje motora</li>
            <li>Poliranje u 2 koraka</li>
            <li>Aplikacija zaštitnog voska</li>
        </Card3>
        <Card3
         className={showCard == 3 ? "show_container" : "hide_container"}
         src="src\assets\brodovi003.png"
         title="Kompletni detail"
         onClick={() => setShowCard(0)}
        >
            <li>Pranje</li>
            <li>Čišćenje protukliznih površina</li>
            <li>Čišćenje i zaštita sjedala</li>
            <li>Čišćenje pretinaca</li>
            <li>Uklanjanje pljesnji i vlage</li>
            <li>Poliranje inox-a</li>
            <li>Čišćenje trupa</li>
            <li>Čišćenje motora</li>
            <li>Vodeno brušenje</li>
            <li>Grubo poliranje u 2 koraka</li>
            <li>Fino poliranje u 2 koraka</li>
            <li>Aplikacija zaštitnog voska</li>
        </Card3>
        </>
    )
}

export default DetailingBrodova
