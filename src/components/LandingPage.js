import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 bg-light p-5">
                        <h1>Landing Page</h1>

                        <button className="btn"><Link to="/test" >Go to test</Link></button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;