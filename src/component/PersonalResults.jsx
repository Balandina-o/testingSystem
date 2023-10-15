import React, { useContext, useState } from "react";

export default function PersonalResults(props) {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <div>Номер теста: {props.testId}</div>
      <div>Результат: {props.res}</div>
    </div>
  );
}
