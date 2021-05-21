import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../auth-store/adminSlice";

import { useHistory } from "react-router-dom";

function LoginForm() {
  //setting the "hook" for incoming data from input fields
  const [credentials, setCredentials] = useState({});

  //calling dispatch to send a payload through react-redux
  const dispatch = useDispatch();

  //calling use history to push users to a previous page
  let history = useHistory();

  //setting the end result for signing in by sending a "fetch" request to the server via the
  // /api/admin route
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    //taking the response and turning it into a usable json file to set off through
    //redux and post to the local storage as verification to continue to access restricted components and pages
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonTok) => {
        console.log("Success:", jsonTok);
        dispatch(loginAdmin(jsonTok));
        localStorage.setItem("token", JSON.stringify(jsonTok));
        //sends the user straight from the login page to the admin dashboard
        history.push("/admindash");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container className="login-cont-size">
      <Form className="login-form-position" onSubmit={handleSubmit}>
        <Form.Label className="login-spacing">
          <h1>Admin Login</h1>
        </Form.Label>
        <br />
        <Form.Label>
          <Form.Control
            size="lg"
            type="email"
            className="login-spacing"
            //useing the previously set hook to add email to the sent data
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="name@example.com"
          />
        </Form.Label>
        <br />
        <Form.Label controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="password"
            className="login-spacing"
            //useing the previously set hook to add password to the sent data
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="password"
          />
        </Form.Label>
        <br />
        <Button type="submit" variant="info">Login</Button>
      </Form>
    </Container>
  );
}
export default LoginForm;
