import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getUsers } from "../API/userAPI";
import UserInProfileAdmin from "../component/UserInProfileAdmin";

const AboutPage = () => {
  const { allUsers } = useContext(Context);
  const { users } = useContext(Context);

  const getUserList = async () => {
    const response = await getUsers();
    allUsers.setUsers(response.data);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      <div>
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            Object.assign({}, users.user).avatar
          }
        ></img>
      </div>
      {users.isAdmin && ( //список только для админа
        <div>
          {allUsers.usersList.map((user) => (
            <UserInProfileAdmin
              id={user.id}
              email={user.email}
              username={user.username} //будут другие поля, с тестами... или это внутри будет? Не придумала пока
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutPage;
