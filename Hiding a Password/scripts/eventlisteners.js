import { Program } from "./index.js";
import { eyeIcon, password } from "./dom-calls.js";


export const Eventlisteners = (() => {
  function changeIcon(){
    eyeIcon.addEventListener('click', () => {
      if(password.type === 'password'){
        password.type = 'text';
        eyeIcon.src='./images/eye-open.png'
      } else {
        password.type = 'password';
        eyeIcon.src='./images/eye-close.png'
      }
    });
  }
  function returnEvenetlisteners(){
    const firstFunction = changeIcon();
    return firstFunction;
  }
  return {
    returnEvenetlisteners
  }
  })();