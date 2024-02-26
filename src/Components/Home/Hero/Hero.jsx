import React from "react";
import "./Hero.scss"    

function Hero() {

    const xRef = React.useRef()


    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="hero__info">
                    <h1 className="hero__heading">Great coffee made simple.</h1>
                    <p className="hero__text">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <button ref={xRef} onClick={() => {
                        xRef.current.classList.add("hidden")
                    }} className="hero__button">Create your plan</button>
                </div>

                <div ref={xRef}  className="modal">
                    <div ref={xRef} className="modalka">
                        <button ref={xRef} onClick={() => {
                            xRef.current.classList.remove("hidden")
                        }} className="modal__button">X</button>
                        <h3 className="modal__heading">coffffe</h3>
                        <p className="modal__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem similique temporibus repellat magnam, vitae iste dolorem quos modi unde et nobis alias possimus optio, molestiae, aperiam aliquam minima maiores asperiores.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;