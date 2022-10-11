import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Option = ({ option, correctAnswer }) => {

    const handleCheck = () => {
        if (correctAnswer === option) {
            const handleCheck = toast.success('Correct Answer!');
        } else {
            const handleCheck = toast.error("Incorrect answer");
        }
    }

    return (
        <div className='mt-3'>
            <div className="bg-sky-200 text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input onClick={handleCheck} defaultChecked id={option} type="radio" defaultValue name="bordered-radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600  dark:border-gray-600" />
                <label htmlFor={option} className="py-4 ml-2 w-full text-gray-900">{1 && option}</label>
                <Toaster />

            </div>
        </div>
    );
};

export default Option;