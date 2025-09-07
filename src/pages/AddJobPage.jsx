import { useNavigate } from "react-router-dom";
import AddJobForm from "../components/AddJobForm";

function AddJobPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-blue-600 text-3xl">➕</span> Add New Job
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            ⬅ Back
          </button>
        </div>

        {/* Form */}
        <AddJobForm onClose={() => navigate("/")} />
      </div>
    </div>
  );
}

export default AddJobPage;
