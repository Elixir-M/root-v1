import React from 'react';
import './InfiniteMovingCardsDemo.css';

const cards = [
  {
    text: 'The journey of a thousand miles begins with a single step.',
    author: 'Lao Tzu',
    source: 'Ancient Philosophy',
  },
  {
    text: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    source: 'Physics and Beyond',
  },
  {
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
    source: 'Leadership Insights',
  },
  {
    text: 'Happiness is not something ready-made. It comes from your own actions.',
    author: 'Dalai Lama',
    source: 'Buddhist Teachings',
  },
  {
    text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
    source: 'Meditative Reflections',
  },
];

const InfiniteMovingCards = () => {
  return (
    <div className="infinite-cards-container">
      <div className="cards-track">
        {[...cards, ...cards].map((card, index) => (
          <div className="card" key={index}>
            <p className="card-text">{card.text}</p>
            <span className="card-author">{card.author}</span>
            <small className="card-source">{card.source}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
