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
import { useJobs } from "../context/JobContext";

function ApplicationsBarChart() {
  const { jobs } = useJobs();

  // 🔹 Group jobs by month
  const groupedByMonth = jobs.reduce((acc, job) => {
    const date = new Date(job.appliedDate || new Date());
    const month = date.toLocaleString("default", { month: "short" });

    if (!acc[month]) {
      acc[month] = { month, Applied: 0, Interviewing: 0, Offer: 0, Rejected: 0 };
    }
    acc[month][job.status] = (acc[month][job.status] || 0) + 1;

    return acc;
  }, {});

  const data = Object.values(groupedByMonth);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h3 className="text-lg font-semibold mb-4">Monthly Applications Trend</h3>
      <div className="h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Applied" fill="#facc15" />
            <Bar dataKey="Interviewing" fill="#8b5cf6" />
            <Bar dataKey="Offer" fill="#22c55e" />
            <Bar dataKey="Rejected" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ApplicationsBarChart;
