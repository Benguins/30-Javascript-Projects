import {notesContainer, createButton, saveContent} from './dom-calls.js';
import { Program } from './index.js';



export const Eventlisteners = (() => {
  function createNotes(){
    createButton.addEventListener('click', () => {
      let inputBox = document.createElement('p');
      let img = document.createElement('img');
      inputBox.className = 'input-box';
      inputBox.setAttribute('contenteditable', 'true');
      img.src = './images/delete.png';
      notesContainer.appendChild(inputBox).appendChild(img);
      Program.save();
    })
  }
  function deleteNotes(){
    notesContainer.addEventListener('click', (e) => {
      if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        Program.save();
      }
    })
  }
  function saveData(){
    saveContent.addEventListener('click', () => {
      Program.save();
    })
  }

  function returnEvenetListeners(){
    const firstFunction = createNotes();
    const secondFunctin = deleteNotes();
    const thirdFunction = saveData();
    return firstFunction, secondFunctin, thirdFunction;
  }

  return {
    returnEvenetListeners
  }
})();


