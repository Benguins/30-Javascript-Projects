import { password, message, strength } from "./dom-calls.js";

export const Eventlisteners = (() => {
  function start(){
    password.addEventListener('input', () => {
      if(password.value.length > 0){
        message.style.display = 'block';
      } else {
        message.style.display = 'none';
      }

      if(password.value.length < 4){
        strength.innerHTML = 'Weak';
        password.style.borderColor = '#ff5925';
        message.style.color = '#ff5925'
      } else if(password.value.length >= 4 && password.value.length < 8){
        strength.innerHTML = 'Medium';
        password.style.borderColor = 'yellow';
        message.style.color = 'yellow';
      } else if(password.value.length >= 8){
        strength.innerHTML = 'Strong';
        password.style.borderColor = '#26d730';
        message.style.color = '#ff5925';
      }
    });
  }
  function returnEvenetlisteners(){
    const firstFunction = start();
    return firstFunction;
  }
  return {
    returnEvenetlisteners
  }
})();