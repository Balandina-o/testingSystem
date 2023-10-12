import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getUsers } from "../API/userAPI";

const AboutPage = () => {
  const { allUsers } = useContext(Context);
  //console.log(allUsers);

  const getUserList = async () => {
    const response = await getUsers();
    allUsers.setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      <input></input>
    </div>
  );
};

export default AboutPage;
