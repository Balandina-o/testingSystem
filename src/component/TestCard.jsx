import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

const TestCard = ({ id, title, description, img, onDelete }) => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: "19rem" }}
      className="mx-4 mt-5 mb-5 position-relative"
    >
      {img !== "" && (
        <Card.Img
          className=" start-0 mt-5"
          variant="top"
          src={process.env.REACT_APP_BASE_URL + img}
        />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {users.loggedIn !== false && (
          <Button variant="primary" onClick={() => navigate(`/tests/${id}`)}>
            Начать тест
          </Button>
        )}
      </Card.Body>
      {users.isAdmin && (
        <Button
          variant="danger"
          style={{ width: "40px", height: "40px" }}
          className="position-absolute end-0 mt-1 me-1"
          onClick={() => onDelete(id)}
        >
          {" "}
          &#9747;
        </Button>
      )}
      {users.isAdmin && (
        <Button
          variant="secondary"
          className="position-absolute start-0 mt-1 ms-1"
          onClick={() => navigate(`/testsedit/${id}`)}
        >
          {" "}
          Редактировать
        </Button>
      )}
    </Card>
  );
};

export default TestCard;
