import CardsCSS from "..\\css\\cards.module.css"
import { Link } from "react-router-dom"

function Card1 ({title, desc, src, url}) {
    return(
        <div className={CardsCSS.card1}>
            <img src={src} alt="image2" />
            <p className={CardsCSS.title}>{title}</p>
            <p className={CardsCSS.description}>{desc}</p>
            <button>
                <Link to={url}>Saznaj više</Link>
                <ion-icon name="arrow-forward"></ion-icon>
            </button>
        </div>
    )
}

export default Card1