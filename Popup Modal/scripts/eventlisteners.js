import { popup, button, buttonClose } from "./dom-calls.js";

export const Eventlisteners = (() => {
  function show(){
    button.addEventListener('click', () => {
      popup.classList.add('open-popup');
    });
  }
  function hide(){
    buttonClose.addEventListener('click', () => {
      popup.classList.remove('open-popup');
    });
  }
  function returnEventlisteners(){
    const firstFunction = show();
    const secondFunction = hide();
    return firstFunction, secondFunction;
  }
  return{
    returnEventlisteners
  }
})();