import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { login } from "../API/userAPI";

const AuthPage = () => {
  const [username, setUsername] = useState("george");
  const [password, setPassword] = useState("qwerty1");
  const { users } = useContext(Context);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await login(username, password);
      users.setLoggedIn(true);
      navigate("/tests");
    } catch (error) {
      if (error.response.status == 403) {
        alert("Неверный логин или пароль"); //сделать другое окошко
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-primary bg-opacity-10 p-4 mt-5 rounded"
        style={{ width: "50%", minWidth: "500px " }}
      >
        <h2>Авторизация</h2>
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          type="password"
          className="mt-3"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-flex justify-content-between align-items-start mt-3">
          <div>
            {" "}
            Еще нет аккаунта?<br></br>
            <Link to="/registration" className="mt-5">
              Зарегистрироваться
            </Link>
          </div>
          <Button variant="success" className="mt-1" onClick={loginUser}>
            Авторизоваться
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AuthPage;
