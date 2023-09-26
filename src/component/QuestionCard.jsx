import React from "react";
import Answer from "./Answer";

const QuestionCard = ({ question, onAnswerSelect }) => {
  return (
    <div className="shadow rounded w-50 h-25 m-3 p-3">
      <div>{question.question}</div>
      <div>
        <img src={question.image} className="w-25 h-25" alt="help" />
      </div>

      <div>
        {question.answers.map((answer) => (
          <Answer
            question_id={question.id}
            answer={answer}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};
export default QuestionCard;
