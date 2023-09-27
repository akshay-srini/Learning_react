import React from 'react';
import Data from './Data';

export default function Hero (props) {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    return (
        <section className="hero-section">
            <div className="container">
                    <img src={props.imgURL} className='img'/>
                <div className='content-container'>
                    <h3 className='loc'>{props.location}</h3>
                    <h2 className='title'>{props.title}</h2>
                    <p className='start-end-date'>{props.startDate} - {props.endDate}</p>
                    <p className='desc'>{props.desc}</p>
                </div>
            </div>
        </section>
    )

}