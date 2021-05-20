import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

function LogoutForm() {
//   const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Button size="lg" variant="dark" onClick={handleSubmit}>
      Logout
    </Button>
  );
}

export default LogoutForm;
