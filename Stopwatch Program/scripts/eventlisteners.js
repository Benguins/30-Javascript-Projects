import { Program } from "./index.js";
import { start, stop, reset } from "./dom-calls.js";

export const Eventlisteners = (() => {
  
  let [seconds, minutes, hours] = [0,0,0];
  let timer = null;

  function startButton(){
    start.addEventListener('click', () => {
      Program.watchStart();
    });
  }

  function stopWatch(){
    stop.addEventListener('click', () => {
      Program.watchStop();
    });
  }

  function resetWatch(){
    reset.addEventListener('click', () => {
      Program.watchReset();
    });
  }

  function returnEventlisteners(){
    const firstFunction = startButton();
    const secondFunction = stopWatch();
    const thirdFunction = resetWatch();
    return firstFunction, secondFunction, thirdFunction;
  }
  return {
    returnEventlisteners
  }
  })();