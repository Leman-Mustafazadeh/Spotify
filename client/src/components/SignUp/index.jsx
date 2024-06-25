import React, { useEffect } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import User from "../../classes/User.js";
import controller from "../../API/index.js";
import userValidation from "../../validation/userValidation.js";
import { endpoints } from "../../API/constants.js";
import Swal from "sweetalert2";
import { login } from "../../redux/slice/user.js";

const SignUp = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.id) {
      navigate("/signup");
    }
  }, [navigate, user]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "", // This was missing in your initial values
    },
    validationSchema: userValidation,
    onSubmit: async (values, actions) => {
      const formData = new FormData();
      try {
        const newUser = new User(
          values.username,
          values.email,
          values.password,
          values.role
        );
        // formData.append("src", newUser.src);
        // formData.append("username", newUser.username);
        // formData.append("email", newUser.email);
        // formData.append("password", newUser.password);
        // // formData.append("isBanned", newUser.isBanned);
        // // formData.append("banCount", newUser.banCount);
        // formData.append("role", newUser.role);
        const response = await controller.post(endpoints.users, newUser);
     
    console.log(response);
        if (response.error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          actions.resetForm();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User signed up successfully!",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/login");
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  

  return (
    <div className="signup">
      <div className="signup_icon">
        <i className="fa-brands fa-spotify"></i>
        <h1>Sign up to start listening</h1>
      </div>
      <div className="signup_head">
        <label htmlFor="email">Email address</label>
        <TextField
          style={{ borderColor: "white", outline: "white", margin: "20px 0" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
          id="email"
          type="email"
          label="Email"
          variant="outlined"
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
      </div>
      <div className="signup_head">
        <label htmlFor="password">Password</label>
        <TextField
          style={{ borderColor: "white", outline: "white", margin: "20px 0" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
          id="password"
          type="password"
          label="Password"
          variant="outlined"
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
      </div>
      <div className="signup_head">
        <label htmlFor="username">Username</label>
        <TextField
          style={{ borderColor: "white", outline: "white", margin: "20px 0" }}
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          onBlur={formik.handleBlur}
          id="username"
          type="text"
          label="Username"
          variant="outlined"
        />
        {formik.touched.username && formik.errors.username && (
          <span style={{ color: "red" }}>{formik.errors.username}</span>
        )}
        <FormControl fullWidth>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            name="role"
            onBlur={formik.handleBlur}
            label="Role"
          >
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="artist">Artist</MenuItem>
          </Select>
        </FormControl>

        {formik.touched.role && formik.errors.role && (
          <span style={{ color: "red" }}>{formik.errors.role}</span>
        )}
      </div>
      <Button  variant="contained" color="primary" onClick={formik.handleSubmit}>
        Sign Up
      </Button>
      <p>
        Already have an account? <Link to="/login">Log in here.</Link>
      </p>
    </div>
  );
};

export default SignUp;
