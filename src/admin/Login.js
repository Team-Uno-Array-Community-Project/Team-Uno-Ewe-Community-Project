// import { response } from "express";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = () => {
        // const data = {  }
        fetch('http://localhost:3003/api/admin/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ email, pass })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
            // const {jwt_token} = response.json();
            // login({ jwt_token })
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            </Form.Label>
            <br />
            <Form.Label>
                <input
                    name="rememberMe"
                    type="checkbox"
                />{" "}
            Remember me
          </Form.Label>
            <br />
            <Form.Label controlId="formBasicPassword">
                <Form.Control type="password" onChange={(e) => setPass(e.target.value)} placeholder="password" />
            </Form.Label>
            <Button type="submit" >Login</Button>
        </Form>
    );
}
export default LoginForm;