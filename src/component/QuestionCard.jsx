import React from "react";
import { Form } from "react-bootstrap";
import Answer from "./Answer";

const QuestionCard = ({ question, onAnswerSelect }) => {
  return (
    <div className="shadow rounded w-50 h-25 m-3 pt-3 pb-3 pe-5 ps-5">
      <div>{question.question}</div>
      <div>
        <img src={question.image} className="w-25 h-25" />
      </div>
      <div className="mt-3">
        {question.answers.map((answer) => (
          <div key={answer.id}>
            <Answer
              question_id={question.id}
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
