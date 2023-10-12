import React, { useContext, useEffect, useState } from "react";
import QuestionCard from "../component/QuestionCard";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../API/questionAPI";
import { Context } from "../index";

const TestPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);

  const [filteredResponse, setFilteredResponse] = useState("");

  const { tests } = useContext(Context);

  const getQuestionList = async () => {
    const response = await getQuestions();
    console.log("Все вопросы ", response.data);

    const filteredResponse = response.data.filter(
      (quest) => quest.testId == params.id //
    );
    console.log("Только нужные ", filteredResponse); //
    setFilteredResponse(filteredResponse); //
    tests.setQuestions(filteredResponse); //
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  const selectAnswer = (question_id, answer_id) => {
    const newAnswer = {
      testId: params.id,
      question_id: question_id,
      answer_id: answer_id,
    };

    let changeAnswer = false;

    const changedAnswers = userAnswers.map((answer) => {
      if (answer.question_id == question_id) {
        changeAnswer = true;
        answer.answer_id = answer_id;
        return answer;
      }
      return answer;
    });
    if (changeAnswer) {
      setUserAnswers(changedAnswers);
    } else {
      setUserAnswers([...userAnswers, newAnswer]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {tests.questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          onAnswerSelect={selectAnswer}
        />
      ))}
      <Button className="mb-5 mt-3" onClick={() => navigate("/tests")}>
        Завершить тест
      </Button>
    </div>
  );
};
export default TestPage;
