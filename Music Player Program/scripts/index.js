import {progress, song, ctrlIcon} from './dom-calls.js'
import { Eventlisteners } from './eventlisteners.js';

export const Program = (() => {
  function start(){
    song.onloadmetadata = () => {
      progress.max = song.duration;
      progress.value = song.currentTime;
    }
  }
  function isPlaying(){
    if(song.play()){
      setInterval(() => {
        progress.value = song.currentTime;
      },500);
    }
  }
  function onChange(){
    progress.onchange = () => {
      song.play();
      song.currentTime = progress.value;
      ctrlIcon.classList.add('fa-pause');
      ctrlIcon.classList.remove('fa-play');
    }
  }

  return{
    start,
    isPlaying,
    onChange
  }
})();

Program.start();
Eventlisteners.returnEventlisteners();
Program.isPlaying();
Program.onChange();
