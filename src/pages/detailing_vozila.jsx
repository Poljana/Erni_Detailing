import AutoCSS from "..\\css\\vozila.module.css"
import { Link } from "react-router-dom"
import Card2 from "../components/card2"
import Card3 from "../components/card3"
import { useEffect, useState } from "react"

function DetailingVozila() {
    const [showCard, setShowCard] = useState(null)
    const [carSlide, setCarSlide] = useState(null)

    useEffect(() => {
        const handleDomContentLoaded = () => {
            setTimeout(() => {                
            }, 1000);
            setCarSlide(true)
        }

        window.addEventListener('DOMContentLoaded', handleDomContentLoaded)

        return window.removeEventListener('DOMContentLoaded', handleDomContentLoaded)
    }, [])

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
        <div className={AutoCSS.pranje_automobila}>
            <div className={AutoCSS.naslovnica}>
                <h1>Uvijek održavaj svoj automobil čistim</h1>
                <img className={`${carSlide} ? ${AutoCSS.slide} : ${AutoCSS.translated}`} src="src\assets\automobil.png" alt="auto" />
                <p className={AutoCSS.citat}>
                "Jer svaki auto zaslužuje više od prosjeka -
                zaslužuje čistoću kao standard."
                </p>
                <button className={AutoCSS.kontakt}>
                    <Link to="/kontakt">
                        <p>Rezerviraj</p>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </Link>
                </button>
            </div>
            <div className={AutoCSS.paketi}>
                <h2>Paketi</h2>
                <Card2 
                 src="src\assets\image2.png"
                 title="Kemijsko čišćenje interijera"
                 onClick={() => setShowCard(1)}
                >
                    <p>
                    Dubinsko usisavanje interijera,<br />
                    Kemijsko čišćenje sjedala i tapecirunga,<br />
                    Čišćenje i dezinfekcija svih plastičnih i kožnih površina ... 
                    </p>
                </Card2>
                <Card2 
                 src="src\assets\image2.png"
                 title="Standardni detailing"
                 onClick={() => setShowCard(2)}
                >
                    <p>
                    Dubinsko usisavanje interijera,<br />
                    Kemijsko čišćenje sjedala i tapecirunga,<br />
                    Čišćenje i dezinfekcija svih plastičnih i kožnih površina ...  
                    </p>
                </Card2>
                <Card2 
                 src="src\assets\image2.png"
                 title="Kompletni detailing"
                 onClick={() => setShowCard(3)}
                >
                    <p>
                    Dubinsko usisavanje interijera,<br />
                    Kemijsko čišćenje sjedala i tapecirunga,<br />
                    Čišćenje i dezinfekcija svih plastičnih i kožnih površina ... 
                    </p>
                </Card2>
            </div>
        </div>
        <Card3
         className={showCard == 1 ? "show_container" : "hide_container"}
         src="src\assets\image2.png"
         title="Kemijsko čišćenje interijera"
         cijena="120"
         onClick={() => setShowCard(0)}
        >
            <li>Dubinsko usisivanje interijera</li>
            <li>Kemijsko čišćenje sjedala i tapecirunga</li>
            <li>Čišćenje i dezinfekcija svih plastičnih i kožnih površina</li>
            <li>Osvježavanje i zaštita svih plastičnih površina</li>
            <li>Impregnacija kožnih površina</li>
            <li>Neutralizacija neugodnih mirisa</li>
        </Card3>
        <Card3
         className={showCard == 2 ? "show_container" : "hide_container"}
         src="src\assets\image2.png"
         title="Standardni detail"
         cijena="170"
         onClick={() => setShowCard(0)}
        >
            <li>Dubinsko usisivanje interijera</li>
            <li>Kemijsko čišćenje sjedala i tapecirunga</li>
            <li>Čišćenje i dezinfekcija svih plastičnih i kožnih površina</li>
            <li>Osvježavanje i zaštitasvih plastičnih površina</li>
            <li>Neutralizacija neugodnih mirisa</li>
            <li>Vanjsko pranje vozila</li>
            <li>Detaljno čišćenje felgi</li>
            <li>Njega i sjaj za gume</li>
            <li>Impregnacija kožnih površina</li>
        </Card3>
        <Card3
         className={showCard == 3 ? "show_container" : "hide_container"}
         src="src\assets\image2.png"
         title="Kompletni detail"
         cijena="270"
         onClick={() => setShowCard(0)}
        >
            <li>Dubinsko usisivanje interijera</li>
            <li>Kemijsko čišćenje sjedala i tapecirunga</li>
            <li>Čišćenje i dezinfekcija svih plastičnih i kožnih površina</li>
            <li>Osvježavanje i zaštitasvih plastičnih površina</li>
            <li>Neutralizacija neugodnih mirisa</li>
            <li>Vanjsko pranje vozila</li>
            <li>Detaljno čišćenje felgi</li>
            <li>Njega i sjaj za gume</li>
            <li>Impregnacija kožnih površina</li>
            <li>Jednoslojno poliranje vozila</li>
            <li>Aplikacija zaštitnog voska</li>
        </Card3>
        </>
    )
}

export default DetailingVozila
