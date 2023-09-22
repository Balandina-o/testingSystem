import { makeAutoObservable } from "mobx";

class ResultsStore {
  results = [];
  constructor() {
    makeAutoObservable(this);
  }

  addResult(result) {
    this.results.push(result);
  }

  clearResults(test_id) {
    this.results = this.results.filter((result) => result.test_id !== test_id);
  }
}
