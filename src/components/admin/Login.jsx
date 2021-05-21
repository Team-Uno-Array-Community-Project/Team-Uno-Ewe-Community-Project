import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../auth-store/adminSlice";

import { useHistory } from "react-router-dom";

function LoginForm() {
  const [credentials, setCredentials] = useState({});

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonTok) => {
        console.log("Success:", jsonTok);
        dispatch(loginAdmin(jsonTok));
        localStorage.setItem("token", JSON.stringify(jsonTok));
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
