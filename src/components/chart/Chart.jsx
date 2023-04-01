import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "January", Total: 2650 },
  { name: "February", Total: 4485 },
  { name: "March", Total: 3200 },
  { name: "April", Total: 3405 },
  { name: "May", Total: 1800 },
  { name: "June", Total: 2700 },
  { name: "July", Total: 3400 },
  { name: "Aug", Total: 1300 },
];
const Chart = () => {
  return (
    <div className="basis-4/6  p-2 shadow-lg max-w-[700px]">
      <div className="text-[12px] md:text-[14px] font-medium text-gray mb-5">
        Last 8 months (Revenue)
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.9} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" fontSize="10px" />
          <YAxis fontSize="10px" />
          <CartesianGrid strokeDasharray="3 3" stroke="#D6CCC2" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#344e41"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
