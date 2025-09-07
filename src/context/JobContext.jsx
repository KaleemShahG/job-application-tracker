import { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("jobs");
    if (stored) setJobs(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, job]);
  const removeJob = (id) => setJobs(jobs.filter((job) => job.id !== id));

  return (
    <JobContext.Provider value={{ jobs, setJobs, addJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobContext);
}
