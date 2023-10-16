import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getUsers } from "../API/userAPI";
import UserInProfileAdmin from "../component/UserInProfileAdmin";
import PersonalResults from "../component/PersonalResults";
import { getResults } from "../API/resultsAPI";
import WatchResults from "../component/WatchResults";
import PersonalUserData from "../component/PersonalUserData";
import { Button, Container, Form } from "react-bootstrap";

const AboutPage = () => {
  return <div>Данное приложение разработано в рамках курсов</div>;
};

export default AboutPage;
