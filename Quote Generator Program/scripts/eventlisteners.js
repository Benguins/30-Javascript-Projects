import { Program } from "./index.js";
import { button } from "./dom-calls.js";

export const Eventlisteners = (() => {

  function getQuote(){
    button.addEventListener('click', () => {
      Program.getQuote('https://api.quotable.io/random');
    })
  }


  function returnEventlisteners(){
    const firstFunction = getQuote();
    return firstFunction;
  }

  return{
    returnEventlisteners
  }
})();