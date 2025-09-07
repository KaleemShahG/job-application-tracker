import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { FaPlusCircle } from "react-icons/fa";

function AddJobForm({ onClose }) {
  const { addJob } = useJobs();

  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Applied");
  const [appliedDate, setAppliedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({
      id: Date.now(),
      company,
      title,
      status,
      appliedDate: appliedDate || new Date().toISOString().split("T")[0],
    });
    onClose(); // close modal after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto space-y-5 animate-fadeIn"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-3">
        <FaPlusCircle className="text-blue-600 text-2xl" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Add Job Application</h2>
          <p className="text-sm text-gray-500">Fill in the details below</p>
        </div>
      </div>

      {/* Input: Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          placeholder="e.g. Google"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Input: Job Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input
          type="text"
          placeholder="e.g. Frontend Developer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Select: Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition bg-white"
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Input: Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Applied Date
        </label>
        <input
          type="date"
          value={appliedDate}
          onChange={(e) => setAppliedDate(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-3 border-t">
        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;
