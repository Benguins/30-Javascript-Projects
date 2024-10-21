import { lists, leftBox, rightBox } from "./dom-calls.js";

export const Evenetlisteners = (() => {

  function first(){
    lists.forEach((list) => {
      list.addEventListener('dragstart', (e) => {
        let selected = e.target;
        rightBox.addEventListener('dragover', (e) => {
          e.preventDefault();
        })
        rightBox.addEventListener('drop', (e) => {
          rightBox.appendChild(selected);
          selected = null;
        })
        leftBox.addEventListener('dragover', (e) => {
          e.preventDefault();
        })
        leftBox.addEventListener('drop', (e) => {
          leftBox.appendChild(selected);
          selected = null;
        })
      });
    })
  }
  
  function returnEventlisteners(){
    const firstFunction = first();
    return firstFunction;
  }
  return {
    returnEventlisteners
  }
})();