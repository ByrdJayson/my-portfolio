import React from 'react'
import {skills} from '../constants/initialValues';
function Home() {
    return (
        <>
            <section id='me-section'>
                <div className='dev-card'>
                    <div>
                        <h2>Jayson Byrd</h2>
                        <span>Full-Stack Web Developer</span>
                    </div>
                    <div id='skills'>
                        {skills.map(skill => {
                            return (
                                <>
                                    <span className='skill' id={skill}>{skill}</span> 
                                </>
                            
                            )
                        })}
                    </div>
                </div>    
            </section>
            <section id='offer-section'>
                <h1>What Can I Do For You?</h1>
            </section>
        </>
        
    )
}

export default Home
