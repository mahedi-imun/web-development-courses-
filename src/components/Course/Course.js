import React from 'react';
import './Course.css'
const Course = ({course}) => {
    const {name,balance,company,phone,ceo,email,picture}=course;
    return (
        <div>
            <div className='card-container'>
            <div className='card-img'>
                <img src={picture} alt="" />
            </div>
            <div className='card-info'>
                <h3>{name}</h3>
                <p> organization: {company}</p>
                <p>{ceo}</p>
                <p> email: {email}</p>
                <p>phone: {phone}</p>
                <h4>price:$ {balance}</h4>
                <div className='btn2-container'>
                <button className='btn2'> add to cart</button>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Course;