import { useJobs } from "../context/JobContext";

function Stats() {
  const { jobs } = useJobs();

  const stats = {
    Applied: jobs.filter((j) => j.status === "Applied").length,
    Interviewing: jobs.filter((j) => j.status === "Interviewing").length,
    Offer: jobs.filter((j) => j.status === "Offer").length,
    Rejected: jobs.filter((j) => j.status === "Rejected").length,
    Total: jobs.length,
  };

  const boxes = [
    { label: "Total", value: stats.Total, color: "bg-blue-600" },
    { label: "Applied", value: stats.Applied, color: "bg-yellow-500" },
    { label: "Interviewing", value: stats.Interviewing, color: "bg-purple-600" },
    { label: "Offer", value: stats.Offer, color: "bg-green-600" },
    { label: "Rejected", value: stats.Rejected, color: "bg-red-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {boxes.map((box) => (
        <div
          key={box.label}
          className={`text-white rounded-lg shadow p-4 ${box.color}`}
        >
          <h3 className="text-lg font-semibold">{box.label}</h3>
          <p className="text-2xl">{box.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;

