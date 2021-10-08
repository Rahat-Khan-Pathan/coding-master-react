import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();   // History API
    // To go back 
    const goBack = ()=> {
        history.go(-1);
    }
    // To go home 
    const goHome = ()=> {
        history.push('/home');
    }
    return (
        <div className="error-container container">
            <img src="/error.svg" alt="Error" />
            <div className="mt-4">
                <h2>Oops! Page Not Found</h2>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2" onClick={goBack}>Back</button>
                    <button className="btn btn-outline-dark" onClick={goHome}>Return Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;