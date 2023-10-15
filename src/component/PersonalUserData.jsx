import React from "react";

const PersonalUserData = ({ user }) => {
  return (
    <div>
      <img
        src={process.env.REACT_APP_BASE_URL + user.avatar}
        alt="Аватар пользователя"
      ></img>
    </div>
  );
};

export default PersonalUserData;
