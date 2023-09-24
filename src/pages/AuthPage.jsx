import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index";
const AuthPage = () => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-primary bg-opacity-10 p-4 mt-5 rounded"
        style={{ width: "50%", minWidth: "500px " }}
      >
        <h2>Авторизация</h2>
        <Form.Control type="text" className="mt-3" placeholder="email" />
        <Form.Control type="password" className="mt-3" placeholder="password" />
        <div className="d-flex justify-content-between align-items-start mt-3">
          <div>
            {" "}
            Еще нет аккаунта?<br></br>
            <Link to="/registration" className="mt-5">
              Зарегистрироваться
            </Link>
          </div>
          <Button
            variant="success"
            className="mt-1"
            onClick={() => {
              users.setLoggedIn(true);
              navigate("/test");
            }}
          >
            Авторизоваться
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AuthPage;
