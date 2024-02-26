import "./Number.scss"

function Number() {
    return (
        <>
        <section className="number">
            <div className="container">
                <div className="number__info">
                    <h5 className="number__heading">01 Preferences</h5>
                    <hr className="line"/>
                    <h5 className="number__heading">02 Bean Type</h5>
                    <hr className="line"/>
                    <h5 className="number__heading">03 Quantity</h5>
                    <hr className="line"/>
                    <h5 className="number__heading">04 Grind Option</h5>
                    <hr className="line"/>
                    <h5 className="number__heading">05 Deliveries</h5>
                </div>

                <div className="info__div">
                <ul className="list">
                    <li className="item">
                        <h6 className="list__heading">How do you drink your coffee? <span className="span">^</span></h6>

                        <ul className="cofe__list">
                            <li className="cofe__item">
                                <h6 className="cofe__heading">Capsule</h6>
                                <p className="cofe__text">Compatible with Nespresso systems and similar brewers</p>
                            </li>

                            <li className="cofe__item cofe__item1">
                                <h6 className="cofe__heading">Capsule</h6>
                                <p className="cofe__text">Compatible with Nespresso systems and similar brewers</p>
                            </li>

                            <li className="cofe__item cofe__item2">
                                <h6 className="cofe__heading">Capsule</h6>
                                <p className="cofe__text">Compatible with Nespresso systems and similar brewers</p>
                            </li>
                        </ul>

                    </li>
                </ul>

                <ul className="list">
                    <li className="item">
                        <h6 className="list__heading">What type of coffee? <span className="span">^</span></h6>

                        <ul className="cofe__list">
                            <li className="cofe__item">
                                <h6 className="cofe__heading">Single Origin</h6>
                                <p className="cofe__text">Distinct, high quality coffee from a specific family-owned farm</p>
                            </li>

                            <li className="cofe__item cofe__item1">
                                <h6 className="cofe__heading">Decaf</h6>
                                <p className="cofe__text">Just like regular coffee, except the caffeine has been removed</p>
                            </li>

                            <li className="cofe__item cofe__item2">
                                <h6 className="cofe__heading">Blended</h6>
                                <p className="cofe__text">Combination of two or three dark roasted beans of organic coffees</p>
                            </li>
                        </ul>

                    </li>
                </ul>

                <ul className="list">
                    <li className="item">
                        <h6 className="list__heading">How much would you like? <span className="span">^</span></h6>

                        <ul className="cofe__list">
                            <li className="cofe__item">
                                <h6 className="cofe__heading">250g</h6>
                                <p className="cofe__text">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </li>

                            <li className="cofe__item cofe__item1">
                                <h6 className="cofe__heading">500g</h6>
                                <p className="cofe__text">Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </li>

                            <li className="cofe__item cofe__item2">
                                <h6 className="cofe__heading">1000g</h6>
                                <p className="cofe__text">Perfect for offices and events. Yields about 90 delightful cups.  </p>
                            </li>
                        </ul>

                    </li>
                </ul>

                <ul className="list">
                    <li className="item">
                        <h6 className="list__heading">Want us to grind them? <span className="span">^</span></h6>

                        <ul className="cofe__list">
                            <li className="cofe__item">
                                <h6 className="cofe__heading">Wholebean</h6>
                                <p className="cofe__text">Best choice if you cherish the full sensory experience</p>
                            </li>

                            <li className="cofe__item cofe__item1">
                                <h6 className="cofe__heading">Filter</h6>
                                <p className="cofe__text">For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </li>

                            <li className="cofe__item cofe__item2">
                                <h6 className="cofe__heading">Cafetiére</h6>
                                <p className="cofe__text"> Course ground beans specially suited for french press coffee</p>
                            </li>
                        </ul>

                    </li>
                </ul>

                <ul className="list">
                    <li className="item">
                        <h6 className="list__heading">How often should we deliver?<span className="span">^</span></h6>

                        <ul className="cofe__list">
                            <li className="cofe__item">
                                <h6 className="cofe__heading">Every week</h6>
                                <p className="cofe__text">$7.20 per shipment. Includes free first-class shipping.</p>
                            </li>

                            <li className="cofe__item cofe__item1">
                                <h6 className="cofe__heading">Every 2 weeks</h6>
                                <p className="cofe__text">$9.60 per shipment. Includes free priority shipping.</p>
                            </li>

                            <li className="cofe__item cofe__item2">
                                <h6 className="cofe__heading">Every month</h6>
                                <p className="cofe__text">$12.00 per shipment. Includes free priority shipping.</p>
                            </li>
                        </ul>

                        <div className="cofe__div">
                            <h6 className="div__heading">Order Summary</h6>
                            <p className="div__text">“I drink my coffee as
                             <span className="spanjon">Filter</span>, 
                               with a
                             <span className="spanjon">Decaf</span> 
                               type of bean. 
                             <span className="spanjon">250g</span> 
                               ground ala 
                             <span className="spanjon">Cafetiare</span>,
                               sent to me <span className="spanjon">Every Week</span>.”</p>
                        </div>

                        <button className="buttonjon">Create my plan!</button>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Number;