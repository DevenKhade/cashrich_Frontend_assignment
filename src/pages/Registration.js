import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "./layout/Topbar";
import UserContext from "../context/UserContext";
// import './Login.css';  // Assuming there's a CSS file for styling

const Registration = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext);

    const [signupData, setSignupData] = useState({
        txtname: "",
        txtEmail: "",
        txtPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        const { txtname, txtEmail, txtPassword } = signupData;

        if (!txtname) {
            newErrors.txtname = "Name is required";
        } else if (!/^[a-zA-Z]{4,15}$/.test(txtname)) {
            newErrors.txtname = "Name should not contain any space and be between 4 to 15 characters";
        }

        if (!txtEmail) {
            newErrors.txtEmail = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(txtEmail)) {
            newErrors.txtEmail = "Please enter a valid email address";
        }

        if (!txtPassword) {
            newErrors.txtPassword = "Password is required";
        } else {
            const passwordErrors = [];
            if (txtPassword.length < 8 || txtPassword.length > 15) passwordErrors.push("between 8 and 15 characters");
            if (!/\d/.test(txtPassword)) passwordErrors.push("a digit");
            if (!/[a-z]/.test(txtPassword)) passwordErrors.push("a lowercase letter");
            if (!/[A-Z]/.test(txtPassword)) passwordErrors.push("an uppercase letter");
            if (!/\W/.test(txtPassword)) passwordErrors.push("a special character");
            if (passwordErrors.length > 0) {
                newErrors.txtPassword = `Password must contain ${passwordErrors.join(", ")}`;
            }
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const { txtname, txtEmail, txtPassword } = signupData;
        updateUser({ username: txtname, email: txtEmail, password: txtPassword });
        alert("Successful signup");
        navigate("/Login");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="Main_Container">
            <Topbar />
            <div className="Login_Container__main">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="card login-card h-80 shadow" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-3">
                                <div className="heading-login mb-4 text-center">
                                    <h3>Registration</h3>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="txtname" className="form-label">Name:</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.txtname ? "is-invalid" : ""}`}
                                            name="txtname"
                                            id="txtname"
                                            value={signupData.txtname}
                                            onChange={handleChange}
                                        />
                                        {errors.txtname && <div className="invalid-feedback">{errors.txtname}</div>}
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="txtEmail" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.txtEmail ? "is-invalid" : ""}`}
                                            name="txtEmail"
                                            id="txtEmail"
                                            value={signupData.txtEmail}
                                            onChange={handleChange}
                                        />
                                        {errors.txtEmail && <div className="invalid-feedback">{errors.txtEmail}</div>}
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label htmlFor="txtPassword" className="form-label">Password:</label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.txtPassword ? "is-invalid" : ""}`}
                                            id="txtPassword"
                                            name="txtPassword"
                                            value={signupData.txtPassword}
                                            onChange={handleChange}
                                        />
                                        {errors.txtPassword && <div className="invalid-feedback">{errors.txtPassword}</div>}
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="btn btn-dark w-100" style={{ borderRadius: "0px" }}>
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
