import { client, loggedInClient } from "./index";

export const getTests = async () => {
  const res = await client.get("/tests");
  return res;
};

export const createTest = async (test) => {
  const res = await loggedInClient.post("/tests", test);
  return res;
};

export const deleteTest = async (id_test) => {
  const res = await loggedInClient.delete("/tests/" + id_test);
  return res;
};
