import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width: "100%"}}src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;