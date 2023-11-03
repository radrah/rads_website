import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>
        Check out these EPIC BLOGS that I haven't written yet!
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg'
                text='Something very deep to exude my supposed mysterious character!'
                label='Adventure'
                path='/services'/>
                <CardItem 
                src='images/img-2.jpg'
                text='Probably something related to weightlifting because I spend ludicrous amount of time doing it'
                label='Luxury'
                path='/services'/>
                
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-3.jpg'
                text='Another post about coding because i spent an absurd amount of time and money to get a degree for it so I might eventually find a job to repay that money'
                label='Mystery'
                path='/services'/>
                <CardItem 
                src='images/img-4.jpg'
                text='Hopefuly a post about videography and cinemotography because this is actually something that I spend a while thinking about(90% of my day)!'
                label='Adventure'
                path='/products'/>
                <CardItem 
                src='images/img-8.jpg'
                text='Something about doing my own thing because this whole society and rat race is kinda lame!'
                label='Adrenaline'
                path='/sign-up'/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
