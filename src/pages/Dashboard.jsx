import { useState } from "react";
import { exportToJson, importFromJson } from "../utils/fileHelper";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Legend, Bar } from "recharts";

function Dashboard() {
  const [applications, setApplications] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", status: "Applied", month: "Jan" },
    { id: 2, title: "Backend Developer", company: "Amazon", status: "Interviewing", month: "Feb" },
    { id: 3, title: "UI/UX Designer", company: "Microsoft", status: "Rejected", month: "Feb" },
    { id: 4, title: "Data Engineer", company: "Netflix", status: "Offer", month: "Mar" },
  ]);

  // Import JSON handler
  const handleImport = (e) => {
    importFromJson(e, (data) => {
      setApplications(data);
    });
  };

  // Stats Data for Pie Chart
  const statusCount = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(statusCount).map((key) => ({
    name: key,
    value: statusCount[key],
  }));

  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#9333ea"];

  // Bar Chart Data (Monthly trend)
  const barData = applications.reduce((acc, app) => {
    const existing = acc.find((d) => d.month === app.month);
    if (existing) {
      existing[app.status] = (existing[app.status] || 0) + 1;
    } else {
      acc.push({ month: app.month, [app.status]: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Job Applications</h1>
          <p className="text-sm text-gray-500">
            Track and manage your job applications effectively
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => exportToJson(applications)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Export JSON
          </button>

          <label className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 cursor-pointer transition">
            Import JSON
            <input
              type="file"
              accept="application/json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Applications by Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Monthly Applications Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(statusCount).map((status, index) => (
                <Bar
                  key={status}
                  dataKey={status}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Applications List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Applications List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applications.length === 0 ? (
            <div className="col-span-full p-8 text-center bg-white rounded shadow">
              No applications yet — add your first job.
            </div>
          ) : (
            applications.map((job) => (
              <div
                key={job.id}
                className="p-4 bg-white shadow rounded-lg flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {job.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
