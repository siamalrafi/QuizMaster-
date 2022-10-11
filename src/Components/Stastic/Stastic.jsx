import { logDOM } from '@testing-library/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const Stastic = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <BarChart
            width={900}
            height={400}
            data={data}
            margin={{
                top: 30,
                right: 30,
                left: 25,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="right" dataKey="total" fill="#82ca9d" />
        </BarChart>
    );
};

export default Stastic;