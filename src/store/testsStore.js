import { makeAutoObservable } from "mobx";

class TestStore {
  testList = [];
  questions = [];

  constructor() {
    makeAutoObservable(this);
  }

  get testList1() {
    return this._testList;
  }

  removeTest(test_id) {
    this.testList = this.testList.filter((test) => test.id !== test_id);
  }

  setTests(tests) {
    this.testList = tests;
  }

  addTest(test) {
    this.testList.push(test);
  }

  setQuestions(questions) {
    this.questions = questions;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  removeQuestion(question_id) {
    this.questions = this.questions.filter(
      (question) => question.id !== question_id
    );
  }

  addAnswer(question_id, answer) {
    this.testList.map((question) => {
      if (question.id === question_id) {
        return question.answers.push(answer);
      }

      return question;
    });
  }

  removeAnswer(question_id, answer_id) {
    this.testList.map((question) => {
      if (question.id === question_id) {
        return (question.answers = question.answers.filter(
          (answer) => answer.id !== answer_id
        ));
      }
      return question;
    });
  }
}

export default TestStore;
