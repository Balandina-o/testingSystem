import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getUsers } from "../API/userAPI";
import UserInProfileAdmin from "../component/UserInProfileAdmin";
import PersonalResults from "../component/PersonalResults";
import { getResults } from "../API/resultsAPI";
import WatchResults from "../component/WatchResults";
import PersonalUserData from "../component/PersonalUserData";
import { Button, Container, Form } from "react-bootstrap";
import classes from "../component/css_component/ProfilePage.module.css";

const ProfilePage = () => {
  const [filteredResponse, setFilteredResponse] = useState("");
  const [filteredResponseRegularUsers, setFilteredResponseRegularUsers] =
    useState("");
  const [showResultWindow, setShowResultWindow] = useState();
  const [sortedRes, setSortedRes] = useState([]);

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

  const getResultsListForRegulars = async (btn) => {
    const response = await getResults();

    const filteredResponseRegularUsers = response.data.filter(
      (res) => res.userId == btn
    );
    setFilteredResponseRegularUsers(filteredResponseRegularUsers);
    results.setResults(filteredResponseRegularUsers);
  };

  function getUserNumberFromBtn(btn) {
    getResultsListForRegulars(btn[0]);
    setShowResultWindow(true);
  }

  function sort() {
    results.filteredResultsList.sort(function (a, b) {
      return parseFloat(a.testId) - parseFloat(b.testId);
    });
    setSortedRes(results.filteredResultsList);
    console.log(sortedRes);
  }

  return (
    <div className={classes.container} key={new FormData()}>
      <PersonalUserData user={Object.assign({}, users.user)} />
      {!users.isAdmin && (
        <Button variant="success" className="mt-1" onClick={sort}>
          Отсортировать по номеру теста
        </Button>
      )}
      {users.isAdmin ? (
        <div>
          {allUsers.usersList.map((user) => (
            <UserInProfileAdmin
              key={user.id}
              id={user.id}
              email={user.email}
              username={user.username}
              getUserNumberFromBtn={getUserNumberFromBtn}
            />
          ))}
          {
            <WatchResults
              key={new FormData()}
              show={showResultWindow}
              onClose={() => setShowResultWindow(false)}
              idBtn={new FormData()}
            ></WatchResults>
          }
        </div>
      ) : (
        <div className={classes.result_cont}>
          {results.filteredResultsList.map((result) => (
            <PersonalResults testId={result.testId} res={result.result} />
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
