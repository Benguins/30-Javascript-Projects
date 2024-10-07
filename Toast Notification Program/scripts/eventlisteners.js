import { buttons, toastBox } from "./dom-calls.js";

export const Eventlisteners = (() => {
  function showToast(){
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        
        let toast = document.createElement('div');
        toast.classList.add('toast');

        let text = '';
        if(button.innerText === 'Success'){
          text += '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
        } else if(button.innerText === 'Error'){
          text += '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
          toast.classList.add('error');
        } else if(button.innerText === 'Invalid'){
          text += '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
          toast.classList.add('invalid');
        }

        toast.innerHTML = text;
        toastBox.appendChild(toast);

        setTimeout(() => {
          toast.remove();
        },6000);

      });
    })
  }

  function returnEventlisteners(){
    const firstFunction = showToast();
    return firstFunction
  }
  return {
    returnEventlisteners
  }
})();