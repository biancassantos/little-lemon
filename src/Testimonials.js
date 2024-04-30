import React from 'react';

function Testimonials() {
  return (
    <section className='testimonials'>
        <h2>Testimonials</h2>
        <div className='users-container'>
            <article className='user-box'>
                <div className='user-header'>
                    <div className='user-img'></div>
                    <h3>Username</h3>
                </div>
                <span>5</span>
                <p>Review goes here</p>
            </article>

            <article className='user-box'>
                <div className='user-header'>
                    <div className='user-img'></div>
                    <h3>Username</h3>
                </div>
                <span>5</span>
                <p>Review goes here</p>
            </article>

            <article className='user-box'>
                <div className='user-header'>
                    <div className='user-img'></div>
                    <h3>Username</h3>
                </div>
                <span>5</span>
                <p>Review goes here</p>
            </article>

            <article className='user-box'>
                <div className='user-header'>
                    <div className='user-img'></div>
                    <h3>Username</h3>
                </div>
                <span>5</span>
                <p>Review goes here</p>
            </article>
        </div>
    </section>
  )
}

export default Testimonials;