import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../auth-store/adminSlice";

import {useHistory} from "react-router-dom";

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
        history.push('/admindash')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          placeholder="name@example.com"
        />
      </Form.Label>
      <br />
      <Form.Label>
        <input name="rememberMe" type="checkbox" /> Remember me
      </Form.Label>
      <br />
      <Form.Label controlId="formBasicPassword">
        <Form.Control
          type="password"
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          placeholder="password"
        />
      </Form.Label>
      <Button type="submit">Login</Button>
    </Form>
  );
}
export default LoginForm;
