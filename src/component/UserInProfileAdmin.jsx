import React from "react";
import { Button } from "react-bootstrap";

export default function UserInProfileAdmin(props) {
  return (
    <div
      className="shadow rounded w-50 h-25  pt-3 pb-3 pe-5 ps-5"
      key={new FormData()}
    >
      <b>id:</b> {props.id} <br />
      <b>email:</b> {props.email} <br />
      <b>username:</b> {props.username} <br />
      <br />
      <Button
        className={props.id}
        onClick={(e) => props.getUserNumberFromBtn(e.currentTarget.className)}
      >
        Посмотреть результаты
      </Button>
    </div>
  );
}
