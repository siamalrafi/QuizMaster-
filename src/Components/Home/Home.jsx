import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';


const Home = () => {
    const data = useLoaderData();
    const cartData = data.data;
    return (
        <div>
            < div className="h-[400px] w-full bg-gradient-to-b from-purple-600 to-blue-600" >
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-10 sm:text-center sm:mb-0">
                            <Link to="/" className="mb-6 sm:mx-auto">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                                    <svg
                                        className="w-10 h-6 text-deep-purple-900"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </Link>
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                    <span className="relative inline-block">
                                        <svg
                                            viewBox="0 0 52 24"
                                            fill="currentColor"
                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-8 sm:block"
                                        >
                                        </svg>
                                    </span>{' '}
                                    You never get a second chance to make a great first impression                                </h2>
                                <p className="text-base text-indigo-100 md:text-lg">

                                    Education is the passport to the future, for tomorrow belongs </p>
                                <p className="text-base text-indigo-100 md:text-lg"> to those who prepare for it today.                                </p>
                            </div>
                            <div>
                                <Link
                                    to="/"
                                    className=" bg-orange-300 inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900  focus:shadow-outline focus:outline-none"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <div className="mt-5 p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">QUIZ FOR YOU !!!
                            </h2>
                            <div className="space-x-2 text-3xl text-center py-2 lg:py-0">
                                <span>Get you Prize!
                                </span>
                                <span className="text-black font-extrabold text-3xl">$5000</span>
                            </div>
                            <Link to='/' rel="noreferrer noopener" className="hover:bg-orange-300 px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Play Now</Link >
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center pt-16'>
                {
                    cartData.map(cart => <SingleCart
                        key={cart.id}
                        cart={cart}
                    />)
                }

            </div>
        </div >
    );
};

export default Home;