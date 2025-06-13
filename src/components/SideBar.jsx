import React from 'react';

const SideBar = () => {
    return (
        <div className="d-none d-lg-block">
            <aside
                className="card p-3 shadow-sm  sticky-top"
                style={{
                    top: "120px",
                    height: "calc(100vh - 140px)",
                    overflowY: "auto",
                    width: '280px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    marginTop:'120px',
                    borderRadius: '12px'
                }}
            >
                <h5 className="mb-3 fw-bold text-primary">All Filters</h5>

                {/* Reusable Filter Sections */}
                <FilterSection title="Experience" options={["Any", "0 Yrs"]} />
                <FilterSection title="Salary" options={["0-3 Lakhs (1505)", "3-6 Lakhs (2377)", "6-10 Lakhs (1922)", "10-15 Lakhs (1040)"]} />
                <FilterSection title="Company Type" options={["Foreign MNC (979)", "Corporate (762)", "Indian MNC (221)", "Startup (213)"]} />
                <FilterSection title="Work Mode" options={["Work from office (4228)", "Hybrid (181)", "Remote (58)", "Temp. WFH due to covid (1)"]} />
                <FilterSection title="Top Companies" options={["Marriott (103)", "Sutherland (27)", "Wipro (26)", "Oracle (23)"]} />
                <FilterSection title="Industry" options={["IT Services & Consulting (1658)", "BPM / BPO (445)", "Recruitment / Staffing (265)", "Software Product (167)"]} />
                <FilterSection title="Role Category" options={["Software Development (1211)", "Recruitment & Talent Acquisition (301)", "Voice / Blended (263)", "BD / Pre Sales (201)"]} />
                <FilterSection title="Stipend" options={["Unpaid (48)", "0-10k (3)", "10k-20k (6)", "20k-30k (1)"]} />
                <FilterSection title="Duration" options={["2 Months (1)", "3 Months (19)", "6 Months (14)", "Flexible (24)"]} />
                <FilterSection title="Education" options={["Any Postgraduate (2506)", "MBA/PGDM (262)", "Any Graduate (3346)", "B.Tech/B.E. (548)"]} />
            </aside>
        </div>
    );
};

const FilterSection = ({ title, options }) => (
    <div className="mb-4">
        <h6 className="fw-semibold text-dark">{title}</h6>
        {options.map((option, i) => (
            <div className="form-check" key={i}>
                <input className="form-check-input" type="checkbox" id={`${title}-${i}`} />
                <label className="form-check-label" htmlFor={`${title}-${i}`}>
                    {option}
                </label>
            </div>
        ))}
    </div>
);

export default SideBar;
