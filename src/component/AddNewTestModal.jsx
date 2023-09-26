import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddNewTestModal = ({ show, onClose }) => {
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
          <Button variant="primary">Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewTestModal;
