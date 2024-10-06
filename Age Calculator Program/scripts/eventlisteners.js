import { userInput, calculateButton, result } from "./dom-calls.js";
import { Program } from "./index.js";

export const Eventlisteners = (() => {
  function calculateBtn(){
    calculateButton.addEventListener('click', () => {
      let birthDate = new Date(userInput.value);

      let birthDateDay = birthDate.getDate();
      let birthDateMonth = birthDate.getMonth() + 1;
      let birthDateYear = birthDate.getFullYear();

      let today = new Date();

      let todayDay = today.getDate();
      let todayMonth = today.getMonth() + 1;
      let todayYear = today.getFullYear();

      let daysDifference, monthsDifference, yearsDifference;

      yearsDifference = todayYear - birthDateYear;
     
      if(todayMonth >= birthDateMonth){
        monthsDifference = todayMonth - birthDateMonth;
      } else {
        yearsDifference--;
        monthsDifference = 12 + todayMonth - birthDateMonth;
      }

      if(todayDay >= birthDateDay){
        daysDifference = todayDay - birthDateDay;
      } else {
        monthsDifference--;
        daysDifference = Program.getDaysInMonth(birthDateYear, birthDateMonth) + todayDay - birthDateDay;
      }

      if(todayMonth < 0){
        todayMonth == 11;
        yearsDifference--;
      }
      result.innerHTML = `You are <span>${yearsDifference}</span> years <span>${monthsDifference}</span> months, and <span>${daysDifference}</span> days old `;

    })
  }

  function returnEventListeners(){
    const firstFunction = calculateBtn();
  }

  return {
    returnEventListeners
  }
})();