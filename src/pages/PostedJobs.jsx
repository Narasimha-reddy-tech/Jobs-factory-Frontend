import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const PostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_DB_RENDER}/cardDetails`);
        const data = await res.json();
        const userPostedJobs = data
          .filter(job => job.created_by)
          .sort((a, b) => new Date(b.posted) - new Date(a.posted));

        setPostedJobs(userPostedJobs);
      } catch (error) {
        console.error(error.name);
      }
    };

    fetchPostedJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_DB_RENDER}/cardDetails/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPostedJobs(postedJobs.filter(job => job.id !== id));
      } else {
        alert("Failed to delete the job");
      }
    } catch (error) {
      console.error(error.name);
    }
  };

  return (
    <div className="container my-5 px-3 px-md-4">
      <h2 className="text-center mb-4">Your Posted Jobs</h2>
      <div className="row">
        {postedJobs.length > 0 ? (
          postedJobs.map(job => (
            <div key={job.id} className="col-12 mb-4">
              <div className="position-relative shadow-sm border rounded p-3 bg-white">
                <JobCard job={job} showDetails={false} />
                <div className="text-end mt-3">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(job.id)}
                    title="Delete Job"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-muted fs-5">No jobs posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostedJobs;
