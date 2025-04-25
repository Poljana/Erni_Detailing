import CardsCSS from "..\\css\\cards.module.css"
import { Link } from "react-router-dom"

function Card1 ({title, desc}) {
    return(
        <div className={CardsCSS.card1}>
            {/* Promijeniti src da uzima razlicite slike */}
            <img src="src\assets\image2.png" alt="image2" />
            <p className={CardsCSS.title}>{title}</p>
            <p className={CardsCSS.description}>{desc}</p>
            <button>
                <Link to="/saznaj-vise">Saznaj više</Link>
                <ion-icon name="arrow-forward"></ion-icon>
            </button>
        </div>
    )
}

export default Card1