import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useJobs } from "../context/JobContext";

function StatsChart() {
  const { jobs } = useJobs();

  const data = [
    { name: "Applied", value: jobs.filter((j) => j.status === "Applied").length },
    { name: "Interviewing", value: jobs.filter((j) => j.status === "Interviewing").length },
    { name: "Offer", value: jobs.filter((j) => j.status === "Offer").length },
    { name: "Rejected", value: jobs.filter((j) => j.status === "Rejected").length },
  ];

  const COLORS = ["#facc15", "#8b5cf6", "#22c55e", "#ef4444"];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h3 className="text-lg font-semibold mb-4">Job Status Overview</h3>
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StatsChart;
