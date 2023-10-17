import React from "react";
import { Button } from "react-bootstrap";

const QuestionEditCard = ({ question, onDelete }) => {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5 position-relative">
      <div>{question.text}</div>
      <div>
        <img
          src={process.env.REACT_APP_BASE_URL + question.imageUrl}
          className="w-25 h-25"
          alt="___"
        />
      </div>
      <div className="mt-3">
        {question.answers.map((answer) => (
          <div key={answer.id}>{answer.answer}</div>
        ))}
      </div>
      <Button
        variant="danger"
        style={{ width: "40px", height: "40px" }}
        className="position-absolute top-0 end-0 mt-2 me-2"
        onClick={() => onDelete(question.id)}
      >
        {" "}
        &#10008;
      </Button>
    </div>
  );
};

export default QuestionEditCard;
