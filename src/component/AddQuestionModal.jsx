import React, { useContext, useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import { createQuestion } from "../API/questionAPI";
import { client } from "../API";
import classes from "./css_component/AddQuestionModal.module.css";

const AddQuestionModal = ({ show, onClose, testId }) => {
  const { tests } = useContext(Context);
  const [text, setText] = useState("");

  const [checkedRadio, setCheckedRadio] = useState(true);
  const [filePath, setFilePath] = useState(null);
  const [newAnswers, setNewAnswers] = useState([]);
  const addNewAnswer = () => {
    setNewAnswers([
      ...newAnswers,
      { id: Date.now(), answer: "", correct: false },
    ]);
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

  const editRadio = (answer1, a_id) => {
    console.log("radio value: ", answer1);
    setNewAnswers(
      newAnswers.map((answer) => {
        answer.correct = false;
        setCheckedRadio(answer1);
        if (answer.id == a_id) {
          answer.correct = checkedRadio;
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
    console.log("response", response);
    tests.addQuestion({
      ...newQuestion,
      id: response.data.id,
    });
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
          <Form id="myform">
            <Form.Control
              type="text"
              placeholder="Формулировка вопроса..."
              className="mt-3"
              value={text}
              required
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
                <div key={answer.id} className={classes.d_flex}>
                  {" "}
                  <Form.Control
                    required
                    type="text"
                    className="mt-3"
                    value={answer.answer}
                    onChange={(e) => editAnswer(e.target.value, answer.id)}
                  />
                  <div className={classes.form_check}>
                    <input
                      id={answer.id}
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      onClick={(e) => editRadio(e.target.checked, answer.id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      <div className={classes.label}>Отметить как верный</div>
                    </label>
                  </div>
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
