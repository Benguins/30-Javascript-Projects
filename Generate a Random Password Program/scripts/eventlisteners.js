import { passwordButton, copy } from "./dom-calls.js";
import {StartProgram} from './index.js';

export const Eventlisteners = (() => {
  function generatePasswordButton(){
    passwordButton.addEventListener('click', () => {
      StartProgram.createPassword();
    })
  }
  function copyText(){
    copy.addEventListener('click', () => {
      StartProgram.copyPassword();
    })
  }
  function returnEventListeners(){
    const firstFunction = generatePasswordButton();
    const secondFunction = copyText();

    return firstFunction, secondFunction;
  }
  return{
    returnEventListeners
  }
})();