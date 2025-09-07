import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { useState } from "react";

function JobDetails() {
  const { id } = useParams();
  const { jobs, removeJob } = useJobs();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === id);

  const [editing, setEditing] = useState(false);
  const [notes, setNotes] = useState(job?.notes || "");

  if (!job) {
    return (
      <p className="text-red-600 text-center mt-10 text-lg font-semibold">
        ❌ Job not found.
      </p>
    );
  }

  const handleSaveNotes = () => {
    job.notes = notes; // simple update (in real app use context update)
    localStorage.setItem("jobs", JSON.stringify(jobs));
    setEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Job Details
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-5">
        {/* Job Title + Company */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600">
            {job.title}
          </h3>
          <p className="text-lg text-gray-700">{job.company}</p>
        </div>

        {/* Status & Date */}
        <div className="flex flex-wrap gap-4">
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            Status: {job.status}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            Applied: {job.appliedDate || "N/A"}
          </span>
        </div>

        {/* Notes */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2 text-gray-800">Notes</h4>
          {editing ? (
            <>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                rows={4}
              />
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Save Notes
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-700 italic">
                {job.notes || "No notes yet."}
              </p>
              <button
                onClick={() => setEditing(true)}
                className="mt-3 inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm font-medium transition"
              >
                ✏️ Edit Notes
              </button>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={() => {
              removeJob(job.id);
              navigate("/");
            }}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition font-medium"
          >
            🗑️ Delete Job
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition font-medium"
          >
            ⬅️ Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
