import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";

import { Context } from "../index";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home" className={classes.brand}>
        Testing System
      </Navbar.Brand>
      <div className={classes.nav}>
        <div className={classes.links}>
          <Link className={classes.link} to="/main">
            Главная
          </Link>
          <Link className={classes.link} to="/about">
            О проекте
          </Link>
          {users.loggedIn && (
            <Link className={classes.link} to="/profile">
              Профиль
            </Link>
          )}
        </div>

        {users.loggedIn ? (
          <Button
            style={{ marginRight: "30px" }}
            variant="outline-light"
            className="button"
            onClick={() => users.setLoggedIn(false)}
          >
            Выйти
          </Button>
        ) : (
          <Button
            style={{ marginRight: "30px" }}
            variant="outline-light"
            className="button"
            onClick={() => navigate("/auth")}
          >
            Авторизоваться
          </Button>
        )}
      </div>
    </Navbar>
  );
});

export default NavBar;
