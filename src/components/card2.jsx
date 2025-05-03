import CardsCSS from "..\\css\\cards.module.css"

function Card2({ src, title, children, onClick }) {
    return(
        <div className={CardsCSS.card2}>
            <img src={src} alt="image" />
            <div className={CardsCSS.detalji}>
                <h3>{title}</h3>
                {children}
                <button onClick={onClick}>
                    <p>Pogledaj Više</p>
                    <ion-icon name="arrow-forward"></ion-icon>
                </button>
            </div>
        </div> 
    )
}

export default Card2