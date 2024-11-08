import { getQuote } from './api.js';

async function displayQuote() {
  try {
    // Отримання цитати з сервера
    const response = await getQuote();
    console.log('Quote response:', response); // Перевірка даних з сервера

    // Перевірка і безпосереднє використання response, без .data
    if (response) {
      const quoteText = response.quote;
      const quoteAuthor = response.author;

      // Знаходження елементів для відображення цитати та автора
      const quoteElement = document.querySelector('.quote-text');
      const authorElement = document.querySelector('.quote-author');

      if (quoteElement && authorElement) {
        // Відображення тексту цитати та автора
        quoteElement.textContent = quoteText;
        authorElement.textContent = `— ${quoteAuthor}`;
      }
    } else {
      console.log('Failed to load quote of the day.');
    }
  } catch (error) {
    console.error('Error fetching quote of the day:', error);
  }
}

// Викликаємо displayQuote при завантаженні сторінки
document.addEventListener('DOMContentLoaded', displayQuote);
