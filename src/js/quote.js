import { fetchQuote } from './api.js';

const getQuoteOfTheDay = async () => {
  const today = new Date().toISOString().split('T')[0];
  const storedQuote = localStorage.getItem('quote');
  const storedDate = localStorage.getItem('quoteDate');

  if (storedDate === today && storedQuote) {
    return JSON.parse(storedQuote);
  }

  const quoteData = await fetchQuote();
  if (quoteData) {
    localStorage.setItem('quote', JSON.stringify(quoteData));
    localStorage.setItem('quoteDate', today);
  }
  return quoteData;
};

export const displayQuoteOfTheDay = async () => {
  const quoteData = await getQuoteOfTheDay();

  if (quoteData) {
    document.querySelector('.description').textContent = quoteData.quote;
    document.querySelector('.quote-author').textContent =
      quoteData.author || '';
  }
};
