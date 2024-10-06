import { Eventlisteners } from "./eventlisteners.js";
import { quote, quoteAuthor } from "./dom-calls.js";

export const Program = (() => {

  async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    
    quoteAuthor.innerHTML = data.author;
    quote.innerHTML = data.content

  }

  return {
    getQuote
  }
})();

Program.getQuote("https://api.quotable.io/random");
Eventlisteners.returnEventlisteners()