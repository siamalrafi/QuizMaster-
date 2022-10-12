import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    
    return (
        <div>
            <nav className="bg-white shadow dark:bg-gray-700 text-xl">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link to="/" className=" text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-green-600" >
                            <span className='text-green-500' to="/">QuizMaster </span>
                            <FontAwesomeIcon icon={faQuestion} />
                        </Link>
                    </div>
                    <div className=" inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <Link className="mr-5 my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-bold" to="/">Home</Link>
                        <Link className="mr-5 my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-bold" to="stastic">Stastic</Link>
                        <Link className="mr-5 my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-bold" to="blog">Blog</Link>
                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Header;