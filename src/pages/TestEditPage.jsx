import React, { useContext, useEffect, useState } from "react";
import QuestionEditCard from "../component/QuestionEditCard";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddQuestionModal from "../component/AddQuestionModal";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { deleteQuestion, getQuestions } from "../API/questionAPI";

const TestEditPage = observer(() => {
  const [showQuestionEditModal, setShowQuestionEditModal] = useState(false);
  const { tests } = useContext(Context);

  const [filteredResponse, setFilteredResponse] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);

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

  const removeQuestion = async (q_id) => {
    try {
      const response = await deleteQuestion(q_id);
      console.log("удаление вопроса :", response);
      tests.removeQuestion(q_id);
    } catch (error) {
      alert(error);
    }
  };

  console.log("userAnswers :", userAnswers);
  return (
    <div className="d-flex flex-column align-items-center">
      <AddQuestionModal
        show={showQuestionEditModal}
        onClose={() => setShowQuestionEditModal(false)}
        testId={params.id}
      />
      {tests.questions.map((question) => (
        <QuestionEditCard
          key={question.id}
          question={question}
          onDelete={removeQuestion}
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
