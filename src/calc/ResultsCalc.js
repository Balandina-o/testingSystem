class ResultsCalc {
  getCorrectNumber(userAnswers) {
    let correctScore = 0;
    userAnswers.map((answer) => {
      if (answer.correct == true) {
        correctScore++;
        return answer;
      }
      return answer;
    });
    return correctScore;
  }

  getResultScore(correct, all) {
    const result = (correct / all) * 100;

    return result;
  }
}
export default ResultsCalc;
