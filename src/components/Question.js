import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';

const QuestionContainer = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const QuestionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Description = styled.div`
    h3{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    button {
        margin: 0.5rem;
        width: 20vw;
        height: 2rem;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #000;
        transition: 0.2s all ease;
    }

    button:hover{
        background-color: #000;
        color: #fff;
    }
`;

const Question = ({data}) => {

    const [questions, setQuestions] = useState({});

    useEffect(() => {
        setQuestions(data);
    }, [data]);

    return ( 
        <QuestionContainer>
            <div className="wrapper">
                <QuestionGrid>
                    <Description>
                        {
                            (Object.keys(questions) === null)
                            ?
                                <h3>QuestionTitle</h3>
                            :
                                <h3>{questions.testQuestions[0].textQuestion}</h3>
                        }
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nihil, recusandae laudantium ullam veniam, praesentium in debitis eius consequuntur velit illum sit dolor? Assumenda pariatur reprehenderit corrupti similique, a id.</p>
                    </Description>
                    <Options>
                        <button className="btn btn-primary">First option</button>
                        <button className="btn btn-primary">Second option</button>
                        <button className="btn btn-primary">Third option</button>
                        <button className="btn btn-primary">Fourth option</button>
                    </Options>
                </QuestionGrid>
            </div>
        </QuestionContainer>
     );
}
 
export default Question;