import { client, loggedInClient } from "./index";

export const setResult = async (result) => {
  const res = await loggedInClient.post("/results", result);
  return res;
};

export const changeAnswer = async (result, resultId) => {
  const res = await loggedInClient.put("/results/" + resultId, result);
  return res;
};
