import React from "react";
import { Button } from "react-bootstrap";

export default function UserInProfileAdmin(props) {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <div>id: {props.id}</div>
      <div>email: {props.email}</div>
      <div>username: {props.username}</div>

      <Button
        className={props.id}
        onClick={(e) => {
          props.getUserNumberFromBtn(e.currentTarget.className);
        }}
      >
        Посмотреть результаты
      </Button>
    </div>
  );
}
