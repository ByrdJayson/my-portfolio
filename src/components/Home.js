import React from 'react'
import {skills} from '../constants/initialValues';
function Home() {
    return (
        <section id='home-section'>
            <div>
                <h2>Jayson Byrd</h2>
                <span>Full-Stack Web Developer</span>
            </div>
            <div id='skills'>
                {skills.map(skill => {
                    return <p className='skill' id={skill}>{skill}</p>
                })}
            </div>
        </section>
    )
}

export default Home
