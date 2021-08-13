import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../service/redux/Action";
import { Redirect, withRouter } from "react-router-dom";

function Login(props) {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isAuthorized, setisAuthorized] = useState(null);
  const loginHandler = async (values) => {
    const url = "https://api-viralsaints.priceyouridea.com/api/v1/users/login";
    // console.log(values);
    const data = {
      user: {
        email: values.email,
        password: values.password,
      },
    };
    await dispatch(login(url, data));
    await setisAuthorized(localStorage.getItem("token"));

    // console.log("while", isAuthorized);
    if (isAuthorized) {
      // console.log("while andar wala ", props.history);
      return <Redirect to="/dashboard" />;
      // props.history.push("/dashboard");
    }
  };

  const validate = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    password: yup
      .string()
      .min(8, "Minimum Password length is 8.")
      .max(16, "Maximum Password length is 16")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain atleast a capital letter, a lowercase letter, a number and a special character."
      )
      .required("Password is required."),
  });

  // console.log("state_login==========>", state);
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validate}
        onSubmit={(values) => {
          loginHandler(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          //@ts-ignore
          <Form>
            <Field
              type="email"
              className={
                errors.email && touched.email
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Email"
              name="email"
            />{" "}
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
            <br />
            <Field
              type="password"
              className={
                errors.password && touched.password
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Password"
              name="password"
            />{" "}
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
            <br />
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default withRouter(Login);
