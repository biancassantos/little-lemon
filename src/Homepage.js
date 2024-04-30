import React from "react";
import Header from "./Header";
import Hero from "./Hero"
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

function Homepage() {
    return (
        <>
            <Header />
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Homepage;