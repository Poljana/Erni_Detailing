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
                    {
                        cijena ?
                        <h3>Cijena: {cijena}€</h3> :
                        <h3>Besplatan pregled broda i uspostava cijene</h3>
                    }
                    <button onClick={onClick}>
                        <ion-icon name="close"></ion-icon>
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Card3