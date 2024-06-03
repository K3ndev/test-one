'use client';
/* Activity 3: Create a simple calculator that can only add 2 numbers */
// 1. First Input element
// 2. Second Input element
// 3. Sum element (No equals button, the sum should be re-rendered as you type values into either of the two input elements above)
// 4. Add a reset button that sets the inputs to 0.
import { useState, type ChangeEvent } from 'react';

export default function ActivityOne() {
  const [inputOne, setInputOne] = useState<number>(0);
  const [inputTwo, setInputTwo] = useState<number>(0);

  const handleChangeOne = (event: ChangeEvent<HTMLInputElement>) => {
    setInputOne(+event.target.value);
  };

  const handleChangeTwo = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTwo(+event.target.value);
  };

  const sum = () => {
    return inputOne + inputTwo;
  };

  const resetHandler = () => {
    setInputOne(0);
    setInputTwo(0);
  };
  return (
    <main>
      <section className="container">
        <div className="flex gap-3">
          {/* First Input element */}
          <input
            type="text"
            placeholder="input one"
            value={inputOne}
            onChange={handleChangeOne}
            className="text-black"
          />
          {/* Second Input element */}
          <input
            type="text"
            placeholder="input two"
            value={inputTwo}
            onChange={handleChangeTwo}
            className="text-black"
          />
        </div>
        {/* Sum element (No equals button, the sum should be re-rendered as you type values into either of the two input elements above) */}
        <p>sum : {sum()}</p>

        {/* Add a reset button that sets the inputs to 0. */}
        <button onClick={resetHandler} className="bg-red-800 text-black">
          reset button
        </button>
      </section>
    </main>
  );
}
