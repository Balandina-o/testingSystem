import React, { useState } from "react";
import QuestionEditCard from "../component/QuestionEditCard";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddQuestionModal from "../component/AddQuestionModal";
import { observer } from "mobx-react-lite";

const TestEditPage = observer(() => {
  const [showQuestionEditModal, setShowQuestionEditModal] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([
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
  ]);

  const deleteQuestion = (q_id) => {
    setQuestions(questions.filter((question) => question.id !== q_id));
  };
  console.log("userAnswers :", userAnswers);
  return (
    <div className="d-flex flex-column align-items-center">
      <AddQuestionModal
        show={showQuestionEditModal}
        onClose={() => setShowQuestionEditModal(false)}
        test_id={params.id}
      />
      {questions.map((question) => (
        <QuestionEditCard
          key={question.id}
          question={question}
          onDelete={deleteQuestion}
        />
      ))}

      <Button
        variant="primary"
        style={{ width: "70px", height: "50px", fontSize: "30px" }}
        className=" position-fixed bottom-0 end-0 mb-5 me-5 pt-0"
        onClick={() => setShowQuestionEditModal(true)}
      >
        +
      </Button>
    </div>
  );
});

export default TestEditPage;
