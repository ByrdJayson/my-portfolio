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
            <section className='contact' id='contact-me'>
                <h1>Reach Out</h1>
                <p>Please Fill Out The Form Below And I Will Be In Contact!</p>
                <p>Be as detailed as possible!</p>
                <div>
                    <form action="https://formsubmit.co/9e3b75cef28e032088e461ce5e5c8e77" method="POST">
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" required/>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" required/>
                        <label htmlFor='message'>How Can I Help You?</label>
                        <textarea name='message' rows='4' cols='50' required/>
                        <button id='submit-btn' type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
        
    )
}

export default Home
