import {imgBox, qrImage, qrText} from './dom-calls.js'
import { Evenetlisteners } from './eventlisteners.js';

export const Program = (() => {
  function generateQR(){
    if(qrText.value.length > 0){
      qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
      return qrImage
    } 
  }
  return {
    generateQR
  }
})();

Evenetlisteners.returnEvenetListeners();



