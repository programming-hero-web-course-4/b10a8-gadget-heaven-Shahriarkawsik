import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatChart = () => {
  const subjectMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 80 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 90 },
    { id: 5, name: "Emma", physics: 70, chemistry: 75, math: 68 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 97 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 85 },
    { id: 8, name: "Hannah", physics: 79, chemistry: 83, math: 77 },
    { id: 9, name: "Ian", physics: 87, chemistry: 89, math: 84 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 92 },
  ];

  const [selectedSubject, setSelectedSubject] = useState("physics");

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div style={{ width: "100%", height: 500 }}>
      <div className="flex justify-center items-center gap-4">
        <button onClick={() => handleSubjectClick("physics")}>Physics</button>
        <button onClick={() => handleSubjectClick("chemistry")}>
          Chemistry
        </button>
        <button onClick={() => handleSubjectClick("math")}>Math</button>
      </div>
      <ResponsiveContainer>
        <BarChart 
          data={subjectMarksData}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={selectedSubject}
            fill={
              selectedSubject === "physics"
                ? "#8884d8"
                : selectedSubject === "chemistry"
                ? "#82ca9d"
                : "#ff7300"
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatChart;
