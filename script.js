const url = 'https://seinfeld-quotes.herokuapp.com/quotes';

async function getQuotes() {
  const response = await fetch(url);
  const responseData = await response.json();

  const allQuotes = responseData.quotes;
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
  <h1 class="quote-text"><span>"</span>${randomQuote}<span>"</span></h1>
  <h2>${character}</h2>`;

  return responseData;
}

getQuotes();
