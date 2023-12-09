import React from 'react';
import quotes from '../assets/quotes.svg';

function FeedbackCard({ title, name, img, content, index, id }) {
  function addBackground(e) {
    if (!e.currentTarget.classList.contains('highlighted-feedback')) {
      e.currentTarget.classList.add('highlighted-feedback');
    }
  }

  function removeBackground(e) {
    if (e.currentTarget.id !== 'feedback-1') {
      e.currentTarget.classList.remove('highlighted-feedback');
    }
  }

  return (
    <div
      className={`flex flex-col justify-between ${
        index === 0 && 'highlighted-feedback py-8 px-6'
      } py-8 px-6 md:py-[3.75rem] md:px-10`}
      onMouseEnter={(e) => addBackground(e)}
      onMouseLeave={(e) => removeBackground(e)}
      id={id}
    >
      <div>
        <img src={quotes} alt="quotes" className="" />
        <p className="mt-8 md:mt-10 mb-6 md:mb-7">{content}</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={img} alt="avatar" className="w-12" />
        <div>
          <h3 className="text-xl font-normal">{name}</h3>
          <small className="text-body">{title}</small>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
