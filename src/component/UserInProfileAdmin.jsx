import React from "react";

export default function UserInProfileAdmin(props) {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <div>id: {props.id}</div>
      <div>email: {props.email}</div>
      <div>username: {props.username}</div>
    </div>
  );
}
