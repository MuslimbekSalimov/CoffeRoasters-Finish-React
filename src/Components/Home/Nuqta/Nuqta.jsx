import "./Nuqta.scss"
import Oval from "../../img/Oval.png"

function Nuqta() {
    return (
        <>
        <section className="nuqta">
            <div className="container">
                <h5 className="nuqta__heading">How it works</h5>

                <hr className="line" />
                <ul className="nuqta__list">
                    <li className="nuqta__item">
                        <img className="nuqta__img" src={Oval} alt="oval" />
                    </li>

                    <li className="nuqta__item">
                        <img className="nuqta__img" src={Oval} alt="oval" />
                    </li>

                    <li className="nuqta__item">
                        <img className="nuqta__img" src={Oval} alt="oval" />
                    </li>
                </ul>


                <ul className="oval__list">
                    <li className="oval__item">
                        <h3 className="oval__heading">01</h3>
                        <h4 className="oval__h4">Pick your coffee</h4>
                        <p className="oval__text">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </li>

                    <li className="oval__item">
                        <h3 className="oval__heading">02</h3>
                        <h4 className="oval__h4">Choose the frequency</h4>
                        <p className="oval__text">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </li>

                    <li className="oval__item">
                        <h3 className="oval__heading">03</h3>
                        <h4 className="oval__h4">Receive and enjoy!</h4>
                        <p className="oval__text">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience. </p>
                    </li>
                </ul>

                <button className="buttonjon">Create your plan</button>
            </div>
        </section>
        </> 
    )
}

export default Nuqta;