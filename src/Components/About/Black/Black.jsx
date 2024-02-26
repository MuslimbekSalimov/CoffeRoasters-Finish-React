import "./Black.scss"
import CofeBitta from "../../img/cofe.jpg"

function Black() {
    return (
        <>
        <section className="black">
            <div className="container">
                <div className="black__info">
                    <h4 className="black__heading">Uncompromising quality</h4>
                    <p className="black__text">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>

                <picture>
                    <img className="black__img" src={CofeBitta} alt="Cofe" />
                </picture>
            </div>
        </section>
        </>
    )
}

export default Black;