import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Context } from "../index";
import { loggedInClient } from "../API";
import { createTest } from "../API/testAPI";

const AddNewTestModal = ({ show, onClose }) => {
  const { tests } = useContext(Context);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picFilePath, setPicFilePath] = useState("");

  const selectFile = async (e) => {
    const picData = new FormData();
    picData.append("file", e.target.files[0]);
    const response = await loggedInClient.post("/file", picData);
    setPicFilePath(response.data.filename);
  };

  const createNewTest = async () => {
    const newTest = {
      name: name,
      description: description,
      testImg: picFilePath,
    };
    const response = await createTest(newTest);
    tests.addTest(newTest);
    onClose();
  };

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
          <Modal.Title>Добавление нового теста</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Название"
              className="mt-3"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Описание теста"
              className="mt-3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Control type="file" className="mt-3" onChange={selectFile} />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={createNewTest}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewTestModal;
