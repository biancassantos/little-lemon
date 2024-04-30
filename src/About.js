import React from 'react';
import imageA from './assets/images/mario-adrian-a.jpg';
import imageB from './assets/images/mario-adrian-b.jpg';

function About() {
  return (
    <section className='about'>
        <article className='about-text'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetu elit. Maecenas lobortis enim dapibus, fringilla risus sed, pulvinar ex. Morbi eleifend, ex nec commodo consequat, dui arcu tincidunt sapien, vel pharetra elit dui id metus.</p>
            <p>Nam condimentum lectus vel sagittis euismod. Quisque consequat, felis sit amet condimentum viverra, ipsum nibh fermentum nulla, ipsum arcu et nisl.</p>
        </article>
        <div className='about-images'>
            <img src={imageA} alt='Mario and Adrian'></img>
            <img className='top-img' src={imageB} alt='Mario and Adrian'></img>
        </div>
    </section>
  )
}

export default About;