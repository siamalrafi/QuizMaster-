import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const Stastic = () => {
    const data = useLoaderData().data;
    return (
        <div className='w-full mx-auto  justify-items-center'>
            <div className='mt-b bg-green-600 p-5 mb-5 flex justify-center font-bold text-2xl'>
                <h1>Quiz Statistic</h1>
            </div>
            <div className='mt-16 flex justify-center'>
                <BarChart width={400} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Stastic;