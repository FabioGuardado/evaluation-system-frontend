import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Question from './Question';

const TestNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 0 1.5rem;
    background-color: #000;
    color: #fff;
`;

const Test = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const getData = () => {
            fetch('http://localhost:8080/api/test/1')
            .then(response => response.json())
            .then(data => console.log(data));
        }

        getData();
    }, []);

    return ( 
        <>
            <TestNavbar>
                <h4 className="text-light">Tehcnical evaluation</h4>
                <span className="text-light">Timer</span>
                <span className="text-light">Question 1 of 5</span>
            </TestNavbar>

            <Question data={data} />
        </>
     );
}
 
export default Test;