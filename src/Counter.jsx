import React from 'react';

const Counter = ({count, handleBtn}) => {
  return (
    <div className="border-2 p-2 mt-2">
      <div>Counter: {count}</div>
      <button
        onClick={handleBtn}
        className="bg-indigo-800 font-bold text-white rounded py-2 px-4">
        Add to Cart
      </button>
    </div>
  );
};

export default Counter;
