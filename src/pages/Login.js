import React, { useState,useContext } from "react";
import Topbar from "./layout/Topbar";
import { useNavigate  } from "react-router-dom";
// import { Link } from "react-router-dom";
// import './Registration';

import UserContext from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { userData , setUserData} = useContext(UserContext);

  const initialLoginData = {
    txtEmail: "",
    password: "",
  };
  const [LoginData, setLoginData] = useState(initialLoginData);


  const users = [{ txtEmail: userData.email, password: userData.password }];
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const requiredFields = ["txtEmail", "password"];
    requiredFields.forEach((field) => {
      if (!LoginData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
console.log("before validation ",userData)
    
    if (userData && // Check if userData exists for safety
      userData.email == LoginData.txtEmail &&
      userData.password == LoginData.password) {
console.log("login")
      navigate("/dashboard");
    } else {
      console.log("err")
      console.log(userData,LoginData)
      setErrors({ general: "Invalid Credentials" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-screen">
      <div className=" Main_Container">
        <div className="Topbar">
          <Topbar />
        </div>
        <div className="Login_Container__main ">
          <div className="row justify-content-center w-100 ">
            <div className="col-lg-4 col-md-4  col-xs-12 ">
              <div className="card login-card h-80 shadow " style={{ borderRadius: "15px" }}>
                <div className="card-body p-3 ">
                  <div className="mb-md-3 mt-md-3 pb-1 ">
                    <div className="row ">
                      <div className="heading-login mb-2 text-center">
                        <h3>Login</h3>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="col-md-12 mb-2">
                        <label htmlFor="txtEmail" className="form-label">  Email:  </label>
                        <input
                          type="email" className={`form-control ${errors.txtEmail ? "is-invalid" : "" } `} //
                          name="txtEmail" id="txtEmail"
                          value={LoginData.txtEmail} onChange={handleChange}
                        />
                        {errors.txtEmail && ( <div className="invalid-feedback"> {errors.txtEmail} </div>  )}
                      </div>
                      <div className="col-md-12  mb-2">
                        <label htmlFor="txtPassword" className="form-label">  Password:  </label>
                        <input
                          type="password" className={`form-control ${errors.password ? "is-invalid" : "" } `} //
                          id="txtPassword" name="password"
                          value={LoginData.password}  onChange={handleChange}
                        />
                        {errors.password && ( <div className="invalid-feedback"> {errors.password} </div> )}
                      </div>

                      <div className="col">
                        <button style={{ width: "100%", borderRadius: "0px" }} 
                        type="submit col" className="btn btn-dark" >
                          Login
                        </button>
                      </div>
                    </form>

                    {/* <div>
                      <p className="pt-3">
                        Don't have an account?{" "}
                        <Link to="../Registration" >
                          Sign up
                        </Link>
                      </p>
                    </div> */}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
       */}
    </div>
  );
};

export default Login;
