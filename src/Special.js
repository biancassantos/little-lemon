import React from 'react';

function Special(props) {
  return (
    <article className='card'>
        <img src={props.image} alt="Dish"></img>
        <div className='card-text'>
          <div className='card-header'>
            <h3>{props.title}</h3>
            <span>$ {props.price}</span>
          </div>
          <p>{props.description}</p>
          <a>Order a delivery</a>
        </div>
    </article>
  )
}

export default Special;