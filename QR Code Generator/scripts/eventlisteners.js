import { Program } from "./index.js";
import { button, imgBox, qrText } from "./dom-calls.js";

export const Evenetlisteners = (() => {
  function generateQrCode(){
    button.addEventListener('click', () => {
      const result = Program.generateQR();
      if(result){
        imgBox.classList.add('show-img');   
      } else {
        qrText.classList.add('error');
        setTimeout(() => {
          qrText.classList.remove('error');
        }, 1000);
      }
    })
  }
  function returnEvenetListeners(){
    const firstFunction = generateQrCode()
    return firstFunction
  }
  return {
    returnEvenetListeners
  }
})();