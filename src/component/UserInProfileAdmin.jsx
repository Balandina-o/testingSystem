import React from "react";
import { Button } from "react-bootstrap";

export default function UserInProfileAdmin(props) {
  return (
    <div
      className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5"
      key={new FormData()}
    >
      id: {props.id} <br />
      email: {props.email} <br />
      username: {props.username} <br />
      <Button
        className={props.id}
        onClick={(e) => props.getUserNumberFromBtn(e.currentTarget.className)}
      >
        Посмотреть результаты
      </Button>
    </div>
  );
}
