
import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import  * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup.string().email("Email Should be valid").required("Email is Required"),
  password: yup.string().required("password is Requierd"),
});

const Login = () => {
  const  dispatch = useDispatch();
  const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: { 
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state)
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if(!user == null || isSuccess) {
      navigate("/admin/dashboard");

    }else {
      navigate("")
    }
    }, [user, isError, isSuccess, isLoading, message, navigate]);

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded -3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onChng={formik.handleChange("email")}
          />
          <div className="error">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null

          }
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onChng={formik.handleChange("password")}
          />
          <div className="error">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null

          }
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot-password
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
