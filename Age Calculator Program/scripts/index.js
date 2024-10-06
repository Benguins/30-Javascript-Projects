import { userInput } from "./dom-calls.js";
import { Eventlisteners } from "./eventlisteners.js";

export const Program = (() => {
  userInput.max = new Date().toISOString().split('T')[0];

  function returnVariables(){
    return userInput;
  }

  function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
  }

  return {
    returnVariables,
    getDaysInMonth
  }
})();

Program.returnVariables();
Eventlisteners.returnEventListeners();