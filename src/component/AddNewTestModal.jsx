import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const AddNewTestModal = ({ show, onClose }) => {
  // async function addNewTest() {
  //   let newTest = {
  //     id: 1,
  //     name: "Оргтехника1",
  //     test_img: "https://diamondhand.ru/util/image/orgtehnika-big.png",
  //   };
  //   const res = await axios.post("http://localhost:3001/tests", newTest);
  //   console.log(res);
  // }

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
            <Form.Control type="text" placeholder="Название" className="mt-3" />
            <Form.Control type="file" className="mt-3" />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => onClose()}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewTestModal;
