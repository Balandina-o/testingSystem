import React, { useContext } from "react";
import { Context } from "../index";

const TestListPage = () => {
  const { tests } = useContext(Context);
  return (
    <div>
      {tests.testList.map((test) => (
        <div key={test.id}>{test.name}</div>
      ))}
    </div>
  );
};

export default TestListPage;
