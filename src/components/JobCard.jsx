import { Link } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { FaTrash, FaEye, FaBuilding } from "react-icons/fa";

function JobCard({ job }) {
  const { removeJob } = useJobs();

  const statusColors = {
    Applied: "bg-blue-100 text-blue-700",
    Interviewing: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
    Offer: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Left: Logo + Job Info */}
      <div className="flex items-center gap-4">
        {/* Company Logo / Placeholder */}
        <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
          <FaBuilding size={20} />
        </div>

        {/* Job Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600 font-medium">{job.company}</p>

          <div className="mt-2 flex flex-wrap gap-2 items-center">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                statusColors[job.status] || "bg-gray-100 text-gray-600"
              }`}
            >
              {job.status}
            </span>
            <span className="text-xs text-gray-500">
              Applied: {job.appliedDate || "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex gap-3">
        <Link
          to={`/job/${job.id}`}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
        >
          <FaEye /> View
        </Link>
        <button
          onClick={() => removeJob(job.id)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
