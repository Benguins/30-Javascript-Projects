import { listContainer } from "./dom-calls.js";
import { Eventlisteners } from "./eventlisteners.js";

export const Program = (() => {
  function save(){
    localStorage.setItem('data', listContainer.innerHTML)
  }
  function load(){
    listContainer.innerHTML = localStorage.getItem('data');
  }
  return {
    save,
    load
  }
})();

Program.load();
Eventlisteners.returnEventlisteners();