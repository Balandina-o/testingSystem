import React from "react";
import { Form } from "react-bootstrap";

const Answer = ({ question_id, answer, onSelect }) => {
  return (
    <div>
      <Form.Check
        inline
        onChange={() => onSelect(question_id, answer.id)}
        label={answer.answer} //установка параметра am=nswer - вариантов ответа - из базы
        name={`group${question_id}`}
        type="radio"
        id={answer.id}
      />
    </div>
  );
};

export default Answer;
