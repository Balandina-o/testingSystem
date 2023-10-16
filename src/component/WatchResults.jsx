import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import PersonalResults from "./PersonalResults";

export default function WatchResults(props) {
  const { results } = useContext(Context);

  return (
    <div key={new FormData()}>
      <Modal
        show={props.show}
        onHide={() => props.onClose()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Результаты пользователя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              {results.resultsList.map((result) => (
                <PersonalResults testId={result.testId} res={result.result} />
              ))}
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.onClose()}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
