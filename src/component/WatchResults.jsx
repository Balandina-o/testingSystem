import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import PersonalResults from "./PersonalResults";

export default function WatchResults(props) {
  const { results } = useContext(Context);
  const [sortedRes, setSortedRes] = useState([]);

  function sort() {
    results.resultsList.sort(function (a, b) {
      return parseFloat(a.testId) - parseFloat(b.testId);
    });
    setSortedRes(results.resultsList);
    console.log(sortedRes);
  }

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
            <Button variant="success" className="mt-1" onClick={sort}>
              Отсортировать по номеру теста
            </Button>
            <div key={new FormData()}>
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
