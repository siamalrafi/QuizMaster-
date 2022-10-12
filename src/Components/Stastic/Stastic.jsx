import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const Stastic = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <div className='mx-auto justify-start'>
            <BarChart width={300} height={200} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Stastic;