import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const EmployeeRegister = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        empId: '',
        empCompany: '',
        empRole: ''
    });

    // Handling the input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    // Handling submit

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { firstName, lastName, email, password, rePassword, empId, empCompany, empRole } = formData;

        // checking for password match
        if (password !== rePassword) {
            alert("Passwords doesn't match");
            return;
        }

        // creating new employee object
        const newEmployee = {
            id: empId,
            name: `${firstName} ${lastName}`,
            email,
            password,
            company: empCompany,
            role: empRole

        };

        // Send POST request to server to create new employee
        try {
            // const res = await fetch("http://localhost:3000/employers", {
            const res = await fetch(`${import.meta.env.VITE_DB_RENDER}/employers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmployee)
            });

            // Check server response
            if (res.ok) {
                alert("Registration successful");
                navigate('/employeelogin')
            }
            else {
                alert('Failed to Register')
            }


        } catch (error) {
            console.error(error.name)
        }

    }

    return (
        <div className='container my-5'>
            <div className="card rounded-4 shadow-lg p-4 p-md-5 mx-auto" style={{ maxWidth: '800px' }}>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center mb-4' style={{ fontFamily: 'revert' }}>
                        Employee Registration Form
                    </h2>

                    {/* Name */}
                    <div className='row mb-3 fw-bold'>
                        <div className="col-md-6 mb-3 mb-md-0">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                placeholder='Enter your First Name'
                                className="form-control p-2"
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                placeholder='Enter your Last Name'
                                className="form-control p-2"
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3 fw-bold">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            className="form-control p-2"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>

                    {/* Password */}
                    <div className='row mb-3 fw-bold'>
                        <div className="col-md-6 mb-3 mb-md-0">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                placeholder='Enter your Password'
                                className="form-control p-2"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rePassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                placeholder='Confirm your Password'
                                className="form-control p-2"
                                id="rePassword"
                                name="rePassword"
                                onChange={handleChange}
                                value={formData.rePassword}
                            />
                        </div>
                    </div>

                    {/* Employee Id */}
                    <div className="mb-3 fw-bold">
                        <label htmlFor="empId" className="form-label">Employee Id</label>
                        <input
                            type="text"
                            placeholder='Enter Employee Id'
                            className="form-control p-2"
                            id="empId"
                            name="empId"
                            onChange={handleChange}
                            value={formData.empId}
                        />
                    </div>

                    {/* Employee Company */}
                    <div className="mb-3 fw-bold">
                        <label htmlFor="empCompany" className="form-label">Employee Company</label>
                        <input
                            type="text"
                            placeholder='Enter Company Name'
                            className="form-control p-2"
                            id="empCompany"
                            name="empCompany"
                            onChange={handleChange}
                            value={formData.empCompany}
                        />
                    </div>

                    {/* Employee Role */}
                    <div className="mb-3 fw-bold">
                        <label htmlFor="empRole" className="form-label">Employee Role</label>
                        <input
                            type="text"
                            placeholder='Enter Company Role'
                            className="form-control p-2"
                            id="empRole"
                            name="empRole"
                            onChange={handleChange}
                            value={formData.empRole}
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" htmlFor="check1">Check me out</label>
                    </div>

                    {/* Submit Button */}
                    <div className='d-grid mb-3'>
                        <button type="submit" className="btn btn-lg btn-primary">Register</button>
                    </div>

                    {/* Login Link */}
                    <p className='text-muted text-center fs-5'>
                        Already registered? <NavLink to="/employeelogin">Login here</NavLink>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default EmployeeRegister
