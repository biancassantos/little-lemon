import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function Hero() {
  return (
    <section className="hero">
      <article>
          <h1>Little Lemon</h1>
          <p className="sub-title">Chicago</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mi eu mi rutrum tincidunt ut id risus. Quisque et fringilla ligula, a vulputate magna.</p>
          <Link to="/booking">
            <button>Reserve a table</button>
          </Link>
      </article>
      <div className="img-container"></div>
    </section>
  )
}

export default Hero;