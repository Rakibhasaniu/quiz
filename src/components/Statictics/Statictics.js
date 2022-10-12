import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'


const Statictics = () => {
    const datas = useLoaderData().data;
    
    return (
        <div className='rechart'>
             <div>
             <LineChart
          width={300}
          height={400}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="name" stroke="#82ca9d" />
        </LineChart>
             </div>
        </div>
    );
};

export default Statictics;