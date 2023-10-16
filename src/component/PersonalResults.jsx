import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function PersonalResults(props) {
  return (
    <div
      className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5"
      key={new FormData()}
    >
      Номер теста: {props.testId} <br />
      Результат: {props.res} / 100
      <br />
    </div>
  );
}
