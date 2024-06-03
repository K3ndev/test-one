'use client';
/* Activity 2: Create a counter app */
// 1. increment, decrement
// 2. Add an element that states whether a number is odd or even.
// 3. Add a reset button that returns the counter to 0.
import { useState } from 'react';

export default function ActivityOne() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const isEvenOdd = (num: number) => {
    if (num % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  };

  const resetHandler = () => {
    setCount(0);
  };
  return (
    <main>
      <section className="container">
        <p>count value: {count}</p>

        {/* 1. increment, decrement */}
        <div className="flex gap-3">
          <button onClick={increment} className="bg-red-800 text-black">
            Increment the count
          </button>
          <button onClick={decrement} className="bg-red-800 text-black">
            Decrement the count
          </button>
        </div>

        {/* Add an element that states whether a number is odd or even. */}
        <div>is Odd or Even: {isEvenOdd(count)}</div>

        {/* Add a reset button that returns the counter to 0. */}
        <button onClick={resetHandler} className="bg-red-800 text-black">
          reset button
        </button>
      </section>
    </main>
  );
}
