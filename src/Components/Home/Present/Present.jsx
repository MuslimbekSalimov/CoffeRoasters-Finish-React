import "./Present.scss"
import Yongoq from "../../img/yongoq.png"

function Present() {
    return (
        <>
        <section className="present">
            <div className="container">
                <ul className="present__list">
                    <li className="present__item">
                        <img className="present__img" src={Yongoq} alt="yongoq" />
                        <h4 className="present__heading">Best quality</h4>
                        <p className="present__text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </li>

                    <li className="present__item">
                        <img className="present__img" src={Yongoq} alt="yongoq" />
                        <h4 className="present__heading">Best quality</h4>
                        <p className="present__text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </li>

                    <li className="present__item">
                        <img className="present__img" src={Yongoq} alt="yongoq" />
                        <h4 className="present__heading">Best quality</h4>
                        <p className="present__text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Present;