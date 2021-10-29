import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Signin</button>
        </div>
    );

};

export default Login;