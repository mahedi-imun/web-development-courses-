import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-container'>
            <div className='banner-text'>
                <h1> Together We'll Explore New Things !!</h1>
                <h2>Education & Online Courses</h2>
                <p>Learn Education with online Education courses. Take courses from the world's best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you complete a course, you'll be eligible to receive a shareable Web development Course Certificate for a small fee.</p>
                <div className='btn-container'>
                <button onClick={()=>navigate('/Courses')} className='btn'> See Courses</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;