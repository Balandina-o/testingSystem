import React from "react";

export default function PersonalResults(props) {
  return (
    <div
      className="shadow rounded w-50 h-50  pt-3 pb-3 pe-5 ps-5"
      style={{ backgroundColor: "white", margin: "3px" }}
      key={new FormData()}
    >
      <b>Номер теста: </b>
      {props.testId} <br />
      <b>Результат: </b> {props.res} / 100
      <br />
    </div>
  );
}
