import React from 'react';
import styles from '../Index.module.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const JobCard = ({ job, showDetails = true }) => {
  const {
    title, company, rating, reviews, img,
    experience, salary, location, work_title,
    first_skill, second_skill, third_skill, fourth_skill, fifth_skill,
    days, id
  } = job;

  const CardBody = () => (
    <div className={`${styles.jobCardContainer} mb-4 px-3 py-3`}>
      {/* Title & Logo */}
      <div className="row">
        <div className="col-12 col-md-10">
          <h5 className={`fw-bold ${styles.jobCardTitle} text-wrap`}>{title}</h5>
          <div className="d-flex flex-wrap text-muted small">
            <div className="me-4">
              {company} <i className={styles.star}>⭐</i> {rating}
            </div>
            <div>{reviews} Reviews</div>
          </div>
        </div>
        <div className="col-12 col-md-2 text-end mt-3 mt-md-0">
          <img src={img} alt="logo" className="img-fluid rounded" style={{ maxHeight: '60px' }} />
        </div>
      </div>

      {/* Experience, Salary, Location */}
      <div className="row mt-3 gy-2">
        <div className="col-12 col-md-4">
          <i className="bi bi-suitcase-lg"></i> {experience} Yrs
        </div>
        <div className="col-12 col-md-4">
          <strong>&#8377; {salary}</strong>
        </div>
        <div className="col-12 col-md-4 text-truncate">
          <i className="bi bi-geo-alt"></i> {location}
        </div>
      </div>

      {/* Work Title */}
      <div className="mt-3">
        <i className="bi bi-journal-richtext me-2"></i>
        <span className="text-wrap">{work_title}</span>
      </div>

      {/* Skills */}
      <div className="row mt-2">
        <ul className="list-inline text-muted small d-flex flex-wrap gap-2">
          {[first_skill, second_skill, third_skill, fourth_skill, fifth_skill].map((skill, index) =>
            skill && <li key={index} className="list-inline-item badge bg-light text-dark">{skill}</li>
          )}
        </ul>
      </div>

      {/* Footer */}
      <div className="row mt-3 align-items-center">
        <div className="col text-muted small">{days} Days ago</div>
        <div className="col text-end text-primary small">
          <i className="bi bi-bookmark"></i> Save
        </div>
      </div>

      {/* Hidden Button */}
      {showDetails && (
        <div className="d-none">
          <Link className="btn btn-primary mt-3" to={`/findjobs/${id}`}>
            View Details
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className={`${styles.jobCardWrapper} mb-3`}>
      {showDetails ? (
        <Link className="nav-link p-0" to={`/findjobs/${id}`}>
          {CardBody()}
        </Link>
      ) : (
        CardBody()
      )}
    </div>
  );
};

export default JobCard;
