import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

function LogoutForm() {
  //setting the use history to send the user back a  prior page
  let history = useHistory();

  const handleSubmit = () => {
    //removes the token from local storage so the user will have o login again to get access to restricted content
    localStorage.removeItem("token");
    //sends the user to the "/" route from app.js which in this case is the homepage of the website
    history.push("/");
  };
  return (
    <Button size="sm" variant="dark" className="logout-btn" onClick={handleSubmit}>
      Logout
    </Button>
  );
}

export default LogoutForm;
