import { makeAutoObservable } from "mobx";

class ResultsStore {
  resultsList = [];
  filteredResultsList = [];

  constructor() {
    makeAutoObservable(this);
  }

  addResult(result) {
    this.resultsList.push(result);
  }

  setResults(results) {
    this.resultsList = results;
  }

  setFilteredResults(results) {
    this.filteredResultsList = results;
  }

  // filteredResultsAdmin(results, user_id) {
  //   this.resultsList = results.filter((res) => res.userId == user_id);
  // }

  // filteredResultsusesrs(results, user_id) {
  //   this.filteredResultsList = results.filter((res) => res.userId == user_id);
  // }
}
export default ResultsStore;
