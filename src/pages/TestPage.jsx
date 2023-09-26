import React, { useState } from "react";
import QuestionCard from "../component/QuestionCard";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const TestPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);
  const question = [
    {
      id: "1",
      test_id: 1,
      question: "Лучший производитель клавиатур",
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
    {
      id: "2",
      test_id: 1,
      question: "Лучший производитель компьтерных мышей",
      image:
        "https://static.ru-mi.com/upload/resize_cache/iblock/12b/440_440_1/5k482c2rh32642q1v2vddbzksq67cwla.jpeg",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
    {
      id: "3",
      test_id: 1,
      question: "Лучший производитель мониторов",
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
    {
      id: "4",
      test_id: 1,
      question: "Лучший производитель наушников",
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
  ];

  const selectAnswer = (question_id, answer_id) => {
    const newAnswer = {
      test_id: params.id,
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
  console.log(userAnswers);
  return (
    <div className="d-flex flex-column align-items-center">
      {question.map((question) => (
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
