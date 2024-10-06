import { Questions } from "./questions.js";
import {questionElement, answerButtons, nextButton} from './dom-calls.js';
import { EventListeners } from "./eventlisteners.js";

export const Program = (() => {
  let myQuestions = Questions.questionsFunction();
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
  }

  function showQuestion(){
    resetState();
    let currentQuestion = myQuestions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      EventListeners.displayColoursOnAnswer(button);
    });
  }

  function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function showScore(param){
    resetState();
    const score = param;
    questionElement.innerText = `You scored ${score} out of ${myQuestions.length}!`;
    nextButton.innerHTML = 'Play again?';
    nextButton.style.display = 'block';
  }

  function handleNextButton(param){
    const score = param;
    currentQuestionIndex++;
    if(currentQuestionIndex < myQuestions.length){
      showQuestion();
    } else {
      showScore(score);
    }
  }

  function returnScore(){
    return score;
  }
  function returnCurrentQuestionIndex(){
    return currentQuestionIndex;
  }

  return {
    startQuiz,
    returnScore,
    returnCurrentQuestionIndex,
    handleNextButton
  }
})();

Program.startQuiz();





