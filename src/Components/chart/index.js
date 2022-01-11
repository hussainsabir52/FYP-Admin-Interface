import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'JAN',
          "Active Users": 120,
        },
        {
          name: 'FEB',
          "Active Users": 1300,
        },
        {
          name: 'MAR',
          "Active Users": 5000,
        },
        {
          name: 'APR',
          "Active Users": 8710,
        },
        {
          name: 'MAY',
          "Active Users": 2134,
        },
        {
          name: 'JUN',
          "Active Users": 10390,
        },
        {
          name: 'JUL',
          "Active Users": 7490,
        },
        {
            name: 'AUG',
            "Active Users": 11100,
          },
          {
            name: 'SEP',
            "Active Users": 17400,
          },
          {
            name: 'OCT',
            "Active Users": 20010,
          },
          {
            name: 'NOV',
            "Active Users": 13120,
          },
          {
            name: 'DEC',
            "Active Users": 26882,
          },
      ];

    return (
        <div className="m-5 p-5 shadow-xl">
            <h3 className="mb-5 font-bold">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey="Active Users" stroke='#5550bd'/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
