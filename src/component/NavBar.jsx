import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Navbar.Brand href="#home" className={classes.brand}>
        Survey Super
      </Navbar.Brand>
      <div className={classes.nav}>
        <div className={classes.links}>
          <Link className={classes.link} to="/main">
            Главная
          </Link>
          <Link className={classes.link} to="/about">
            О Проекте
          </Link>
          <Link className={classes.link} to="/profile">
            Профиль
          </Link>
        </div>
        <Button style={{ marginRight: "30px" }} variant="outline-success">
          Авторизоваться
        </Button>
      </div>
    </Navbar>
  );
};

export default NavBar;
