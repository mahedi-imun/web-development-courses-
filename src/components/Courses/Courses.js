import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://mahedi-imun.github.io/All-course-API/course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='courses-body'>
            <div className='courses-container'>
                {
                    courses.map(course => <Course
                        course={course}
                        key={course._id}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;