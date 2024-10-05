import { inputBox, listContainer, addButton } from "./dom-calls.js";
import {Program} from './index.js';

export const Eventlisteners = (() => {
  function addTask(){
    addButton.addEventListener('click', () => {
      if(inputBox.value === ''){
        alert('You must write something')
      } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
      }
      inputBox.value = '';
      Program.save();
    });
  }

  function manipulateListItems(){
    listContainer.addEventListener('click', (e) => {
      if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        Program.save();
      } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        Program.save();
      }
    }, false)
  }

  function returnEventlisteners(){
    const firstFunction = addTask();
    const secondFunction = manipulateListItems();
    return firstFunction, secondFunction;
  }

  return {
    returnEventlisteners
  }
})();