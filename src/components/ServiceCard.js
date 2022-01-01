import React from 'react'

function ServiceCard(props) {

    const { service } = props;
    return (
        <div className='service-card'>
            <h4>{service}</h4>
        </div>
    )
}

 export default ServiceCard
