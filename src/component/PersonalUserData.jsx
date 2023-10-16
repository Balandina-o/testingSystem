import React from "react";

const PersonalUserData = ({ user }) => {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <img
        src={process.env.REACT_APP_BASE_URL + user.avatar}
        alt="Аватар пользователя"
      ></img>
      <div>{user.email}</div>
      <div>
        Добро пожаловать в Ваш личный кабинет, {user.first_name}{" "}
        {user.last_name}. Здесь{" "}
        {user.role == "user" && "будут отражены Ваши результаты"}
        {user.role == "admin" &&
          "будет отражен список пользователей и их результаты"}
      </div>
    </div>
  );
};

export default PersonalUserData;
