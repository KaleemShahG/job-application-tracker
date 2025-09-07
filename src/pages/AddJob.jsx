import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const { addJob } = useJobs();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
    appliedDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow max-w-lg"
      >
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="title"
          type="text"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input
          name="appliedDate"
          type="date"
          value={form.appliedDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddJob;
