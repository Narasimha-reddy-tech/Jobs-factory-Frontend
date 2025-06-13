import React from 'react';
import styles from '../Index.module.css';

const Hero = () => {
    return (
        <div className={`container py-5 ${styles.heroContainer}`}>
            <div className="row align-items-center gy-5">
                {/* Image Column */}
                <div className="col-12 col-lg-6 text-center">
                    <img
                        src="/assets/Screenshot 2025-04-30 124759.png"
                        alt="Hero"
                        className={`img-fluid ${styles.heroImage}`}
                    />
                </div>

                {/* Text Column */}
                <div className="col-12 col-lg-6 text-center text-lg-start px-3 px-lg-5">
                    <h1 className={styles.heroTitle}>
                        <span className="text-warning">Find the Job </span>
                        You've <br className="d-none d-md-block" />Been Dreaming Of!
                    </h1>

                    <p className={styles.heroSubtext}>
                        Search thousands of job listings, <br className="d-none d-md-block" /> find the right one for you.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                        <button className="btn btn-primary btn-lg rounded-pill px-4">Find Jobs</button>
                        <button className="btn btn-outline-primary btn-lg rounded-pill px-4">+ Post Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
