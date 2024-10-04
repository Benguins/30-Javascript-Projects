import { App } from "./index.js";
import {searchBox, searchBtn} from './dom-calls.js';

export const EventListeners = (() => {
  function getCity(){
    searchBtn.addEventListener('click', () => {
      App.checkWeather(searchBox.value);
    })
  }
  function returnEventListeners(){
    const firstFunction = getCity();
    return firstFunction;
  }
  return{
    returnEventListeners
  }
})();