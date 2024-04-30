import React from 'react';
import Special from './Special';

function Specials() {
    let specials = [
        {
            image: './assets/images/greek-salad.jpg',
            title: 'Greek Salad',
            price: '10.99',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et a vulputate magna.'
        }, {
            image: './assets/images/bruschetta.svg',
            title: 'Bruschetta',
            price: '12.99',
            description: 'Lorem ipsum dolor sit amet, adipiscing elit. Fusce vel mi tincidunt ut id risus. Quisque et fringilla ligula.'
        }, {
            image: './assets/images/lemon-dessert.jpg',
            title: 'Lemon Dessert',
            price: '5.99',
            description: 'Lorem ipsum dolor sit amet, consectetur. Fusce vel mi eu mi rutrum. Quisque et fringilla ligula.'
        }
    ];

    return (
        <section className='specials'>
            <div className='specials-header'>
                <h2>This week's specials</h2>
                <button>Online Menu</button>
            </div>
            <div className='cards-container'>
                {specials.map((dish, index) => {
                    return <Special 
                        image={dish.image} 
                        title={dish.title} 
                        price={dish.price} 
                        description={dish.description} />})
                }
            </div>
        </section>
  )
}

export default Specials;