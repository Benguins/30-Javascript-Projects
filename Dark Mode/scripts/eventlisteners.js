import { Program } from "./index.js";
import { icon } from "./dom-calls.js";

export const Eventlisteners = (() => {
  function changeMode(){
    icon.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')){
        icon.src='./images/sun.png'
      } else {
        icon.src='./images/moon.png'
      }
    })
  }
  function returnEventlisteners(){
    const functionOne = changeMode();
  }
  return {
    returnEventlisteners
  }
  })();