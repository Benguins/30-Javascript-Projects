import { EventListeners } from "./eventlisteners.js";
import { daysElement, hoursElement, minutesElement, secondsElement } from "./dom-calls.js";

export const Program = (() => {
  function start(){
    const counDownDate = new Date('Oct 28, 2024 00:00:00').getTime()
    const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = counDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    if(distance < 0){
      clearInterval(x);
      daysElement.innerHTML = '00';
      hoursElement.innerHTML = '00';
      minutesElement.innerHTML = '00';
      secondsElement.innerHTML = '00';
    }

  },1000);
  }
  return{
    start
  }
})();

Program.start();




