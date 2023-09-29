import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Context } from "../index";

const AddQuestionModal = ({ show, onClose, test_id }) => {
  const { tests } = useContext(Context);
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);
  const [newAnswers, setNewAnswers] = useState([]);
  const addNewAnswer = () => {
    setNewAnswers([...newAnswers, { id: Date.now(), name: "" }]);
  };
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const deleteAnswer = (a_id) => {
    setNewAnswers(newAnswers.filter((answer) => answer.id !== a_id));
  };
  const editAnswer = (name, a_id) => {
    setNewAnswers(
      newAnswers.map((answer) => {
        if (answer.id == a_id) {
          answer.name = name;
          return answer;
        }
        return answer;
      })
    );
  };

  const saveQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      test_id: test_id,
      question: question,
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: newAnswers,
    };
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
          <Modal.Title>Создание опроса</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Формулировка вопроса..."
              className="mt-3"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <Form.Group controlId="formFile" className="mb-3">
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
                    value={answer.name}
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
