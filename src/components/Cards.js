import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of our NFTs here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/kerby-1.jpg'
              text='Sun and moon eaters'
              label='Minokawa'
              path='/collection'
            />
            <CardItem
              src='images/kerby-2.jpg'
              text='Swamp'
              label='Swamp'
              path='/collection'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kerby-3.jpg'
              text='Ocean'
              label='Kyogre'
              path='/collection'
            />
            <CardItem
              src='images/kerby-4.jpg'
              text='Food chain'
              label='Eagle'
              path='/collection'
            />
            <CardItem
              src='images/kerby-5.jpg'
              text='Arrival'
              label='Arrival'
              path='/collection'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
