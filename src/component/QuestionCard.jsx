import React from "react";
import { Form } from "react-bootstrap";
import Answer from "./Answer";

const QuestionCard = ({ question, onAnswerSelect }) => {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <div>{question.text}</div>
      <div>
        <img
          src={process.env.REACT_APP_BASE_URL + question.imageUrl}
          className="w-25 h-25"
        />
      </div>
      <div className="mt-3">
        {question.answers.map((answer) => (
          <div key={answer.id}>
            <Answer
              question_id={question.question_id}
              answer={answer}
              onSelect={onAnswerSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
