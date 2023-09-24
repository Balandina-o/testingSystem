import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

const RegistrationPage = () => {
  const { users } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-primary bg-opacity-10 p-4 mt-5 rounded"
        style={{ width: "50%", minWidth: "500px " }}
      >
        <h2>Регистрация</h2>
        <Form.Control type="text" className="mt-3" placeholder="Имя ..." />
        <Form.Control type="text" className="mt-3" placeholder="Фамилия ..." />
        <Form.Control type="text" className="mt-3" placeholder="email ..." />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Имя пользователя ..."
        />
        <Form.Control
          type="password"
          className="mt-3"
          placeholder="Password..."
        />

        <Form.Control type="file" className="mt-3" />
        <div className="d-flex justify-content-end align-items-start mt-3">
          <Button
            variant="success"
            className="mt-1"
            onClick={() => {
              users.setLoggedIn(true);
              navigate("/survey");
            }}
          >
            {" "}
            Зарегистрироваться
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationPage;
