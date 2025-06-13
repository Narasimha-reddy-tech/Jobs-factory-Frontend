import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';

const Employee = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("EmployeeLogged"));
    if (!user) {
      navigate('/employeelogin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("EmployeeLogged");
    navigate("/");
  };

  const handleNavClick = () => {
    // Auto-close sidebar on small devices
    if (window.innerWidth < 992) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Mobile Header with Toggle Button */}
      <div className="d-flex justify-content-between align-items-center d-lg-none bg-primary text-white p-3">
        <h5 className="mb-0">Dashboard</h5>
        <button
          className="btn btn-light"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className="bi bi-list fs-3"></i>
        </button>
      </div>

      <div className="row g-0">
        {/* Sidebar */}
        <div
          className={`col-lg-3 col-md-4 bg-light ${isSidebarOpen ? '' : 'd-none d-lg-block'}`}
          style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            boxShadow: '2px 0px 10px rgba(0,0,0,0.1)',
            overflowY: 'auto',
            zIndex: 1050,
          }}
        >
          <div className="p-4">
            <h5 className="fw-bold fs-3">Dashboard</h5>
            <ul className="nav flex-column fs-5">
              <li className="nav-item mb-3">
                <NavLink to="/employee/profile" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-person-fill me-2"></i> Profile
                </NavLink>
              </li>
              <li className="nav-item mb-3">
                <NavLink to="/employee/postedjobs" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-briefcase-fill me-2"></i> Posted Jobs
                </NavLink>
              </li>
              <li className="nav-item mb-3">
                <NavLink to="/employee/createjob" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-file-earmark-plus me-2"></i> Create a Job
                </NavLink>
              </li>
              <li className="nav-item mb-3">
                <NavLink to="#" className="nav-link" onClick={handleNavClick}>
                  <i className="bi bi-gear-fill me-2"></i> Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger mx-3 mt-3" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right  me-2"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="col-lg-9 col-md-8 bg-white p-4"
          style={{ minHeight: '100vh', overflowY: 'auto' }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Employee;
