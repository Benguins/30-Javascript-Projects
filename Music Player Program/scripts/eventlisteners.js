import {progress, song, ctrlIcon} from './dom-calls.js'


export const Eventlisteners = (() => {
  function playPause(){
    ctrlIcon.addEventListener('click', () => {
      if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
      } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
      }
    })
  }

  function returnEventlisteners(){
    const functionOne = playPause();
    return functionOne;
  }

  return{
    returnEventlisteners
  }
})();