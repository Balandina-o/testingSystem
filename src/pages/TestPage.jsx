import React, { useContext, useEffect, useState } from "react";
import QuestionCard from "../component/QuestionCard";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../API/questionAPI";
import { Context } from "../index";
import ResultsCalc from "../calc/ResultsCalc";
import { setResult } from "../API/resultsAPI";
import TestListPage from "./TestListPage";

const TestPage = () => {
  const resultsCalc = new ResultsCalc();
  let result = 0;
  const { tests } = useContext(Context);
  const { users } = useContext(Context);
  const { results } = useContext(Context);

  const params = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);

  const [filteredResponse, setFilteredResponse] = useState("");

  const getQuestionList = async () => {
    const response = await getQuestions();
    console.log("Все вопросы ", response.data); //

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

  const selectAnswer = (question_id, answer_id, correct) => {
    const newAnswer = {
      testId: params.id,
      question_id: question_id,
      answer_id: answer_id,
      correct: correct,
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

  function getScoreAndNavigate() {
    const correctNumber = resultsCalc.getCorrectNumber(userAnswers);
    result = resultsCalc.getResultScore(correctNumber, tests.questions.length);
    // console.log("сумма ", tests.questions.length);
    // console.log("верных ", correctNumber);
    // console.log("result ", result);
    saveResult();
    navigate("/tests");
  }

  const saveResult = async () => {
    const newResult = {
      userId: users.user.id,
      testId: params.id,
      result: result,
    };

    const response = await setResult(newResult);
    console.log("созданный результат :", response.data);
    results.addResult(newResult);
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
      <Button className="mb-5 mt-3" onClick={getScoreAndNavigate}>
        Завершить тест
      </Button>
    </div>
  );
};
export default TestPage;
