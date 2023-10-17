import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from "./css_component/NavBar.module.css";

import { Context } from "../index";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  function navigateAndAdminCheck() {
    navigate("/auth");
    users.setIsAdmin();
  }

  function exitFromAdminAndFromLogin() {
    navigate("/main");
    users.setLoggedIn(false);
    users.setIsAdmin(false);
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home" className={classes.brand}>
        <a class="navbar-brand" href="#">
          <img
            src={process.env.REACT_APP_BASE_URL + "/uploads/logo.png"}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          <b>esting System</b>
        </a>
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
              Личный кабинет
            </Link>
          )}
        </div>

        {users.loggedIn ? (
          <Button
            style={{ marginRight: "30px" }}
            variant="outline-light"
            className="button"
            onClick={exitFromAdminAndFromLogin}
          >
            Выйти
          </Button>
        ) : (
          <Button
            style={{ marginRight: "30px" }}
            variant="outline-light"
            className="button"
            onClick={navigateAndAdminCheck}
          >
            Авторизоваться
          </Button>
        )}
      </div>
    </Navbar>
  );
});

export default NavBar;
