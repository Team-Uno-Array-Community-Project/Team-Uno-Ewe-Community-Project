import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import { loginAdmin } from '../../auth-store/adminSlice';

function LoginForm() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    // const [token, setToken] = useState('unauthorized');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('http://localhost:3003/api/admindash/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ email, pass })
        })
            .then(response =>{
                return response.text();
            })
            .then(text => console.log(text))
            .then( jsonTok=> {
                console.log('Success:', jsonTok);
                dispatch(loginAdmin(jsonTok))
                localStorage.setItem('token', jsonTok);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
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