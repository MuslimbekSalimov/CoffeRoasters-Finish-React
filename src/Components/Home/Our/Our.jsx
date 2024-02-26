import "./Our.scss"
import cofeBitta from "../../img/dofebitta.png"

function Our() {
    return(
        <>
        <section className="ours">
            <div className="container">
                <div className="ours__info">
                <ul className="ours__list">
                    <li className="ours__item">
                        <img className="ours__bitta" src={cofeBitta} alt="Bitta" width={255} height={193} />
                        <h2 className="ours__heading">Gran Espresso</h2>
                        <p className="ours__text">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </li>

                    <li className="ours__item">
                        <img className="ours__bitta" src={cofeBitta} alt="Bitta" width={255} height={193} />
                        <h2 className="ours__heading">Planalto</h2>
                        <p className="ours__text">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </li>

                    <li className="ours__item">
                        <img className="ours__bitta" src={cofeBitta} alt="Bitta" width={255} height={193} />
                        <h2 className="ours__heading">Piccollo</h2>
                        <p className="ours__text">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </li>

                    <li className="ours__item">
                        <img className="ours__bitta" src={cofeBitta} alt="Bitta" width={255} height={193} />
                        <h2 className="ours__heading">Danche</h2>
                        <p className="ours__text">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Our;