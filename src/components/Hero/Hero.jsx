import "./Hero.scss";
export default function Hero(){
    return(
        <section className="hero">
        <p className="hero__title">Our Mission:</p>
        <h1 className="hero__text">
          Provide photographers a space to share photos of the neighbourhoods
          they cherish,{" "}
          <span className="hero__text--modifier">
            expressed in their unique style.
          </span>
        </h1>
      </section>
    )
}