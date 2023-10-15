import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getUsers } from "../API/userAPI";
import UserInProfileAdmin from "../component/UserInProfileAdmin";
import PersonalResults from "../component/PersonalResults";
import { getResults } from "../API/resultsAPI";
import WatchResults from "../component/WatchResults";
import PersonalUserData from "../component/PersonalUserData";

const AboutPage = () => {
  const [filteredResponse, setFilteredResponse] = useState("");
  const [filteredResponseRegularUsers, setFilteredResponseRegularUsers] =
    useState("");
  const [showResultWindow, setShowResultWindow] = useState();

  const [idBtn, setIdBtn] = useState("");

  const { allUsers } = useContext(Context);
  const { users } = useContext(Context);
  const { results } = useContext(Context);

  const getAllUsersList = async () => {
    const response = await getUsers();
    allUsers.setUsers(response.data);
  };

  useEffect(() => {
    getAllUsersList();
  }, []);

  const getResultsList = async () => {
    const response = await getResults();

    const filteredResponse = response.data.filter(
      (res) => res.userId == Object.assign({}, users.user).id
    );
    setFilteredResponse(filteredResponse);
    results.setFilteredResults(filteredResponse);
  };

  useEffect(() => {
    getResultsList();
  }, []);

  const getResultsListForRegulars = async () => {
    const response = await getResults();

    const filteredResponseRegularUsers = response.data.filter(
      (res) => res.userId == idBtn
    );
    setFilteredResponseRegularUsers(filteredResponseRegularUsers);
    results.setResults(filteredResponseRegularUsers);
  };

  useEffect(() => {
    getResultsList();
  }, []);

  getResultsListForRegulars();

  function getUserNumberFromBtn(btn) {
    getResultsListForRegulars();
    setIdBtn(btn[0]);
    setShowResultWindow(true);
  }

  return (
    <div>
      <PersonalUserData user={Object.assign({}, users.user)} />

      {users.isAdmin ? (
        <div>
          {allUsers.usersList.map((user) => (
            <UserInProfileAdmin
              id={user.id}
              email={user.email}
              username={user.username}
              getUserNumberFromBtn={getUserNumberFromBtn}
            />
          ))}
          {
            <WatchResults
              show={showResultWindow}
              onClose={() => setShowResultWindow(false)}
            ></WatchResults>
          }
        </div>
      ) : (
        results.filteredResultsList.map((result) => (
          <PersonalResults testId={result.testId} res={result.result} />
        ))
      )}
    </div>
  );
};

export default AboutPage;
