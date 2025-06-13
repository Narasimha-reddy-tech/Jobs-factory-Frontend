import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const JobCardList = () => {
    const [jobList, setJobList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_DB_RENDER}/cardDetails`);
                const data = await response.json();
                const sortedData = data.sort((a, b) => new Date(b.posted) - new Date(a.posted));
                setJobList(sortedData);
            } catch (error) {
                console.error(error.name);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobList.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const jobsPerPage = 6;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const paginatedJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    return (
        <div className="container">
            {/* Search Input */}
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-8 my-4 col-lg-6">
                    <div className="input-group shadow-sm">
                        <input
                            type="text"
                            className="form-control fw-semibold text-muted fs-5"
                            placeholder="Job title or Company"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-primary fw-bold" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Job Cards */}
            <div className="mt-4">
                {paginatedJobs.length > 0 ? (
                    paginatedJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                ) : (
                    <p className="text-center text-muted fs-4 mt-4">No matching jobs found. Please enter a valid keyword.</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav aria-label="Page navigation" className="d-flex justify-content-center mt-5 mb-5">
                    <ul className="pagination">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
                        </li>
                        {[...Array(totalPages)].map((_, i) => (
                            <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default JobCardList;
