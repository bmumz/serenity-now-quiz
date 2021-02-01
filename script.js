const url = 'https://seinfeld-quotes.herokuapp.com/quotes';

getQuotes(url);

async function getQuotes() {
  const response = await fetch(url);
  const responseData = await response.json();

  showQuotes(responseData.quotes);
}

function showQuotes(allQuotes) {
  const filteredQuotes = allQuotes.filter(
    (quote) =>
      quote.author === 'Elaine' ||
      quote.author === 'Jerry' ||
      quote.author === 'Kramer' ||
      quote.author === 'George'
  );

  const setRandom = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[setRandom].quote;
  const character = filteredQuotes[setRandom].author;

  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = `
    <h1 class="quote-text"><span class="highlight"><span>"</span>${randomQuote}<span>"</span></span></h1>
    `;
}

function chooseCharacter() {
  const characters = [
    { name: 'Jerry', url: 'https://i.ibb.co/LdH70JT/jerryBtn.png' },
    { name: 'Elaine', url: 'https://i.ibb.co/VqPC3r2/elaine-Btn.png' },
    { name: 'George', url: 'https://i.ibb.co/z2gLTjj/george-Btn.png' },
    { name: 'Kramer', url: 'https://i.ibb.co/zJFbtFV/kramer-Btn.png' },
  ];

  characters.map((character) => {
    const characterElement = document.getElementById('characters');
    const buttonElement = document.createElement('button');

    buttonElement.innerHTML = `<img src='${character.url}' alt='Select ${character.name}'>`;

    characterElement.append(buttonElement);
  });
}

chooseCharacter();

// COUNTDOWN
let countdown;
const displayTimer = document.querySelector('.countdown-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayRemainingTime(seconds);

  countdown = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000);
    if (timeLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayRemainingTime(timeLeft);
  }, 1000);
}

function displayRemainingTime(seconds) {
  const remainingSeconds = seconds % 60;
  const display = `${remainingSeconds} ${
    remainingSeconds === 0 ? "time's up!" : 'seconds remaining...'
  } `;
  document.title = 'Serenity NOW! ' + display;
  displayTimer.textContent = display;
}

timer(10);
