import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import landingImage from './img/landing-picture.svg';


const LandingContainer = styled.div`
    height: 80vh;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`;

const LandingImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-height: 40vh;
    }
`;

const LandingText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;

    h1{
        margin-bottom: 1rem;
    }
    .button-box{
        margin-top: 2rem;
        display: flex;
        justify-content: space-evenly;
    }

    .btn {
        width: 10vw;
        height: 3rem;
        font-size: 1rem;
        padding: 0.50rem;
        transition: 0.2s all ease;
    }
    .btn:hover{
        cursor: pointer;
    }

    .btn-login{
        background-color: #0656BC;
        color: #fff;
        border: none;
        border-radius: 5px;
    }

    .btn-login:hover{
        background-color: #005083;
    }

`;

const LandingPage = () => {
    return ( 
        <>
            <div className="wrapper">
                <LandingContainer>
                    <LandingImage>
                        <img src={landingImage} alt="landing image" />
                    </LandingImage>
                    <LandingText>
                        <h1>Technical Evaluation System</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt libero! Dolorem tempora voluptatibus ab, natus vel quas. Labore beatae nisi id esse autem non mollitia eius, et voluptas tempore!</p>
                        <div className="button-box">
                            <Link to="/login"><button className=" btn btn-login" >Log In</button></Link>
                            <Link to="/signup"><button className=" btn btn-signup" >Sign Up</button></Link>
                        </div>
                    </LandingText>
                </LandingContainer>
            </div>
        </>
     );
}
 
export default LandingPage;