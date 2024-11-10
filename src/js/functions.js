import { getQuote as getQuoteFromApi } from './api';

async function getQuote() {
  const quoteData = JSON.parse(localStorage.getItem('quoteData'));
  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

  if (quoteData && quoteData.date === today) {
    return {
      author: quoteData.author,
      quote: quoteData.quote,
    };
  }

  try {
    const quoteData = await getQuoteFromApi();

    localStorage.setItem(
      'quoteData',
      JSON.stringify({ ...quoteData, date: today })
    );

    return quoteData;
  } catch (error) {    
    throw new Error('Error fetching quote:', error);
  }
}

export { getQuote };
