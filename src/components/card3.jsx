import CardsCSS from "..\\css\\cards.module.css"

function Card3({ src, title, children, onClick, cijena, className }) {
    return(
        <div className={`${CardsCSS[className]} ${CardsCSS.container}`}>
            <div className={CardsCSS.card3}>
                <img src={src} alt="image" />
                <div className={CardsCSS.detalji}>
                    <h3>{title}</h3>
                    <ul className={CardsCSS.tekst}>
                        {children}
                    </ul>
                    <h3>Cijena: {cijena}€</h3>
                    <button onClick={onClick}>
                        <ion-icon name="close"></ion-icon>
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Card3