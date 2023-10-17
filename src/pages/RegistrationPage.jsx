import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import axios from "axios";
import { client } from "../API";
import { useNavigate } from "react-router-dom";
import { register } from "../API/userAPI";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [avatarPath, setAvatarpath] = useState("");

  const { users } = useContext(Context);
  const navigate = useNavigate();

  const selectFile = async (e) => {
    const avatarData = new FormData();
    avatarData.append("file", e.target.files[0]);
    const response = await client.post("/file", avatarData);
    console.log("path to avatar - ", response.data.filename);
    setAvatarpath(response.data.filename);
  };

  const registerUser = async (e) => {
    const user = {
      email: email,
      username: username,
      password: password,
      role: "user",
      first_name: first_name,
      last_name: last_name,
      avatar: avatarPath,
    };
    try {
      const response = await register(user);
      console.log(response);
      users.setLoggedIn(true);
      users.setUser({
        ...user,
        user,
      });
      navigate("/tests");
    } catch (error) {
      alert("Ошибка! Проверьте введенные данные");
    }
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
          <Button variant="success" className="mt-1" onClick={registerUser}>
            {" "}
            Зарегистрироваться
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationPage;
