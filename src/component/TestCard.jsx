import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TestCard = ({ id, title, description, img, onDelete }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="m-4 position-relative">
      <Card.Img className=" start-0 mt-5" variant="top" src={img} />{" "}
      {/*отступ сверху - mt-1 */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/tests/${id}`)}>
          Открыть
        </Button>
      </Card.Body>
      <Button
        variant="danger"
        style={{ width: "40px", height: "40px" }}
        className="position-absolute end-0 mt-1 me-1"
        onClick={() => onDelete(id)}
      >
        {" "}
        &#9747;
      </Button>
      <Button
        variant="secondary"
        className="position-absolute start-0 mt-1 ms-1"
        onClick={() => navigate(`/testsedit/${id}`)}
      >
        {" "}
        Редактировать
      </Button>
    </Card>
  );
};

export default TestCard;
