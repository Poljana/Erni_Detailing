import AutoCSS from "..\\css\\vozila.module.css"
import { Link } from "react-router-dom"

function DetailingVozila() {
    return(
        <div className={AutoCSS.pranje_automobila}>
            <div className={AutoCSS.naslovnica}>
                <h1>Uvijek održavaj svoj automobil čistim</h1>
                <img src="src\assets\automobil.png" alt="auto" />
                <p className={AutoCSS.citat}>
                "Jer svaki auto zaslužuje više od prosjeka –
                zaslužuje čistoću kao standard."
                </p>
                <button className={AutoCSS.kontakt}>
                    <Link to="/kontakt">
                        <p>Rezerviraj</p>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default DetailingVozila
