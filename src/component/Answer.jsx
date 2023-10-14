import React from "react";
import { Form } from "react-bootstrap";

const Answer = ({ question_id, answer, onSelect }) => {
  return (
    <div key={answer.id}>
      <Form.Check
        inline
        onChange={() => onSelect(question_id, answer.id, answer.correct)}
        label={answer.answer} //установка параметра answer - вариантов ответа - из базы
        name={`group${question_id}`}
        type="radio"
        id={answer.id}
      />
    </div>
  );
};

export default Answer;
