import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const DisplayQuiz = () => {
    const data = useLoaderData();
    const { id, name, total, questions } = data.data;

    return (
        <div className='m-20'>
            <div className='p-5 font-extrabold rounded shadow text-center bg-purple-600 text-2xl'>
                <h1>Quiz Of {name}</h1>
            </div>
            {
                questions.map((quest, index) => <Question
                    index={index}
                    key={quest.id}
                    quest={quest}
                />

                )
            }
        </div>
    );
};

export default DisplayQuiz;