import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { login } from "../../redux/slice/user";
import controller from "../../API/index"; // Make sure to import your API controller

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [navigate, user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      try {
        const response = await controller.post("/login", {
          email: values.email,
          password: values.password,
          isVerified: true,
        });
       
        if (response.auth) {
          actions.resetForm();
          dispatch(login(response.user));

          const token = response.token;
          Cookies.set("token", token, { expires: 1 });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops, something went wrong!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
  });

  return (
    <div className="login_page">
      <div className="login_head">
        <i className="fa-brands fa-spotify"></i>
        <h1>Log in to Spotify</h1>
      </div>

      <form onSubmit={formik.handleSubmit} className="login_form">
        <TextField  style={{ borderColor: "white", outline: "white", margin: "20px 0" }}
          fullWidth
          id="email"
          name="email"
          label="Email or Username"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField  style={{ borderColor: "white", outline: "white", margin: "20px 0" }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button style={{width:'100%'}} type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>

      <a href="#">Forgot your password?</a>
      <hr />

      <p>
        Don't have an account? <Link to="/signup">Sign up for Spotify</Link>
      </p>
    </div>
  );
};

export default Login;
