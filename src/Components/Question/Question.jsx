import { faEye, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast';


const Question = ({ quest, index }) => {
    const { correctAnswer, id, question, options } = quest;

    const orginalSrting = question;
    const newSting = orginalSrting.replace(/(<([^>]+)>)/ig, '');

    const handleCarrect = () => {
        const handleCarrect = toast.success(`Correct Answer is  ${correctAnswer}`)
    }


    return (
        <div className='mt-4 p-2 rounded bg-sky-500/50 '>
            <section>

                <h1 className='font-bold text-2xl pb-6'>Quiz {index + 1}. {newSting}?   <span className='flex justify-end'>
                    <button title='Correct Answer' onClick={handleCarrect}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                </span></h1>

                {
                    options.map((option, index) => <Option
                        key={index}
                        correctAnswer={correctAnswer}
                        option={option}
                    />)
                }
            </section>
        </div>
    );
};

export default Question;