import React from 'react'
import {skills} from '../constants/initialValues';
import services from '../constants/services';
import ServiceCard from './ServiceCard';
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
                <p>Below are some of the services I am currently offering</p>
                <div className='offerings'>
                        {services.map(service => {
                            return <ServiceCard service={service}/>
                        })}
                </div>
            </section>
        </>
        
    )
}

export default Home
