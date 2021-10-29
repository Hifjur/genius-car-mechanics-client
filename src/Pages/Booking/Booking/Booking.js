import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect( () => {
        fetch(`http://localhost:5000/services/617b503192ce7f6ac9b12088`)
        .then (res => res.json())
        .then(data => setService(data));
    }, []);
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h2>Details of : {service.name}</h2>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;