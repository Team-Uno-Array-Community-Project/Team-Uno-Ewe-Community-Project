import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutAdmin } from "../../auth-store/adminSlice";

function LogoutForm() {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
        dispatch(logoutAdmin());
        localStorage.removeItem("token");
        history.push("/");
  };
  return (
  <Button size="lg" variant='dark' onclick={handleSubmit}>Logout</Button>
  );
}

export default LogoutForm;
