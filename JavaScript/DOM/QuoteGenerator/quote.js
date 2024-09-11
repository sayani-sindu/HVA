//variables

let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    { 
        quote: "In the middle of every difficulty lies opportunity.", 
        person: "Albert Einstein" 
    },
    { 
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
        person: "Winston Churchill" 
    },
    { 
        quote: "It always seems impossible until it’s done.", 
        person: "Nelson Mandela" 
    },
    { 
        quote: "Do not watch the clock. Do what it does. Keep going.", 
        person: "Sam Levenson" 
    },
    { 
        quote: "The best way to predict the future is to invent it.", 
        person: "Alan Kay" 
    },
    { 
        quote: "Don’t let yesterday take up too much of today.", 
        person: "Will Rogers" 
    },
    { 
        quote: "Believe you can and you're halfway there.", 
        person: "Theodore Roosevelt" 
    },
    { 
        quote: "The purpose of our lives is to be happy.", 
        person: "Dalai Lama" },
    { 
        quote: "Act as if what you do makes a difference. It does.", 
        person: "William James" 
    }
  ];

const quoteChange = ()=>{
    let random = Math.floor(Math.random() * quotes.length);// number between 0 and length of the quote


    quote.innerText = quotes[random].quote;// quote from quotes
    person.innerText = quotes[random].person;// person from quotes
}
btn.addEventListener('click', quoteChange);