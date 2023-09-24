import React, { useContext, useState } from "react";
import { Context } from "../index";
import TestCard from "../component/TestCard";
import { observer } from "mobx-react-lite";
import { Button } from "react-bootstrap";

const TestListPage = observer(() => {
  const { tests } = useContext(Context);
  const removeTest = (id_test) => {
    tests.removeTest(id_test);
  };

  return (
    <div className="d-flex flex-wrap ">
      {tests.testList.map((test) => (
        <TestCard
          key={test.id}
          id={test.id}
          title={test.name}
          img={test.test_img}
          description={test.description}
          onDelete={removeTest}
        />
      ))}

      <Button
        variant="primary"
        style={{ width: "70px", height: "50px", fontSize: "30px" }}
        className=" position-fixed bottom-0 end-0 mb-5 me-5 pt-0"
        // onClick={() => setShowCreateSurveyModal(true)}
      >
        +
      </Button>
    </div>
  );
});

export default TestListPage;
