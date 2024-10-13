import { Program } from "./index.js";
import { buttons, display, equel } from "./dom-calls.js";

export const Eventlisteners = (() => {
  function getValue(){
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonValue = e.target.value;
        display.value += buttonValue;
        if(buttonValue === 'AC'){
          display.value = '';
        }
        if(buttonValue === 'DE'){
          display.value = display.value.toString().slice(0, -3);
        }
      });
    });
  }

  function equels(){
    equel.addEventListener('click', () => {
        display.value = eval(display.value);
    });
  }

  function returnEventlisteners(){
    const firstFunction = getValue();
    const secondFunction = equels();
    return firstFunction, secondFunction;
  }
  return {
    returnEventlisteners
  }
  })();