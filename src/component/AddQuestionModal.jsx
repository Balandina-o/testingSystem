import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import { createQuestion } from "../API/questionAPI";
import { client } from "../API";

const AddQuestionModal = ({ show, onClose, testId }) => {
  const { tests } = useContext(Context);
  const [text, setText] = useState("");
  const [filePath, setFilePath] = useState("");
  const [newAnswers, setNewAnswers] = useState([]);
  const addNewAnswer = () => {
    setNewAnswers([...newAnswers, { id: Date.now(), answer: "" }]);
  };

  const selectFile = async (e) => {
    const fileData = new FormData();
    fileData.append("file", e.target.files[0]);
    const response = await client.post("/file", fileData);
    setFilePath(response.data.filename);
  };

  const deleteAnswer = (a_id) => {
    setNewAnswers(newAnswers.filter((answer) => answer.id !== a_id));
  };

  const editAnswer = (answer1, a_id) => {
    setNewAnswers(
      newAnswers.map((answer) => {
        if (answer.id == a_id) {
          answer.answer = answer1;
          return answer;
        }
        return answer;
      })
    );
  };

  const saveQuestion = async () => {
    const newQuestion = {
      testId: testId,
      text: text,
      imageUrl: filePath,
      answers: newAnswers,
    };

    const response = await createQuestion(newQuestion);
    console.log("созданный вопрос :", response.data);
    tests.addQuestion(newQuestion);
    onClose();
  };
  console.log("Варианты ответов: ", newAnswers);
  return (
    <div>
      <Modal
        show={show}
        onHide={() => onClose()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Создание нового вопроса</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Формулировка вопроса..."
              className="mt-3"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <Form.Group
              controlId="formFile"
              className="mb-3"
              onChange={selectFile}
            >
              <Form.Label className="mt-3">
                Выберите картинку для вопроса
              </Form.Label>
              <Form.Control
                type="file"
                className="mt-2"
                onChange={selectFile}
              />
            </Form.Group>
            <Form.Label className="mt-3">Варианты ответа:</Form.Label>
            <div>
              {newAnswers.map((answer) => (
                <div key={answer.id} className="d-flex">
                  {" "}
                  <Form.Control
                    type="text"
                    className="mt-3"
                    value={answer.answer}
                    onChange={(e) => editAnswer(e.target.value, answer.id)}
                  />
                  <Button
                    variant="danger"
                    style={{ width: "30px", height: "30px" }}
                    className=" ms-3 mt-3 p-0"
                    onClick={() => deleteAnswer(answer.id)}
                  >
                    &#10008;
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <Button variant="primary" className="mt-3" onClick={addNewAnswer}>
                Добавить
              </Button>
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={saveQuestion}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddQuestionModal;
