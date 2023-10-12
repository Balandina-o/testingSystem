import { client, loggedInClient } from "./index";

export const getQuestions = async () => {
  const res = await client.get("/questions");
  return res;
};

export const createQuestion = async (question) => {
  const res = await loggedInClient.post("/questions", question);
  return res;
};

export const deleteQuestion = async (questionId) => {
  const res = await loggedInClient.delete("/questions/" + questionId);
  return res;
};
