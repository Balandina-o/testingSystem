import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import axios from "axios";
import { client } from "../API";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [avatarPath, setAvatarpath] = useState("");

  const { users } = useContext(Context);
  const navigate = useNavigate();

  const user = {
    id: 1,
    email: "george.bluth@reqres.in",
    username: "george",
    password: "qwerty1",
    role: "admin",
    first_name: "George",
    last_name: "Bluth",
    avatar: "/uploads/1-image.jpg",
  };

  const selectFile = (e) => {
    const avatarData = new FormData();
    avatarData.append("file", e.target.files[0]);
    const response = client.post("/file", avatarData);
    console.log("path to avatar - ", response.data.filename);
    setAvatarpath(response.data.filename);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-primary bg-opacity-10 p-4 mt-5 rounded"
        style={{ width: "50%", minWidth: "500px " }}
      >
        <h2>Регистрация</h2>
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Имя ..."
          value={first_name}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Фамилия ..."
          value={last_name}
          onChange={(e) => setLastname(e.target.value)}
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Имя пользователя ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          type="password"
          className="mt-3"
          placeholder="Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Form.Control type="file" className="mt-3" onChange={selectFile} />
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
