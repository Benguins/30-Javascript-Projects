import {answerButtons, nextButton} from './dom-calls.js';
import { Program } from './index.js';
import { Questions } from './questions.js';

export const EventListeners = (() => {

  let score = 0;
  let myQuestions = Questions.questionsFunction();

  function displayColoursOnAnswer(button){
    button.addEventListener('click', (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === 'true';
      if(isCorrect){
        selectedBtn.classList.add('correct');
        // let score = Program.returnScore();
        score++;
      } else {
        selectedBtn.classList.add('incorrect');
      }
      Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
          button.classList.add('correct');
        }
        button.disabled = true;
      });
      nextButton.style.display = 'block';
      nextButtonListener(score);
    });
  }

  function nextButtonListener(param){
    const score = param
    nextButton.addEventListener('click', () => {
      const CurrentQuestionIndex = Program.returnCurrentQuestionIndex();
      if(CurrentQuestionIndex < myQuestions.length){
        Program.handleNextButton(score);
      } else {
        location.reload();
      }
    })
  }
  
  return {
    displayColoursOnAnswer,
    nextButtonListener
  }

})();

