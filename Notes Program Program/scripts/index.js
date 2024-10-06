import { Eventlisteners } from "./eventlisteners.js";
import { notesContainer } from "./dom-calls.js";

export const Program = (() => {

  function save(){
    localStorage.setItem('notes', notesContainer.innerHTML);
  }
  function load(){
    notesContainer.innerHTML = localStorage.getItem('notes');
  }

  return {
    save,
    load
  }
})();

Program.load();
Eventlisteners.returnEvenetListeners();

