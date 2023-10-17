import React from "react";
import classes from "./css_component/PersonalUserData.module.css";

const PersonalUserData = ({ user }) => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.img_and_email}>
          <img
            className={classes.img}
            src={process.env.REACT_APP_BASE_URL + user.avatar}
            alt="Аватар пользователя"
          ></img>
          <div className={classes.email}>
            <b>Почта: </b> {user.email}
          </div>
        </div>
      </div>
      <div>
        <div className={classes.text_another}>
          <div className={classes.text}>
            Добро пожаловать в Ваш личный кабинет,{" "}
            <b>
              {user.role} {user.first_name} {user.last_name}!
            </b>
            <br />
            Здесь {user.role == "user" && "будут отражены Ваши результаты"}
            {user.role == "admin" &&
              "будет отражен список пользователей и их результаты"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalUserData;
