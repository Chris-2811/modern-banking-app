import React from 'react';

function Button({ text }) {
  return (
    <button className="btn-primary py-[1.125rem] px-8 rounded-lg text-primary ">
      {text}
    </button>
  );
}

export default Button;
