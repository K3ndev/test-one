'use client';
/* Activity 4: Create a centered button, with the text “GROW”, that doubles in size on click. */
// 1. Modify the button to also change to a random color for every click.
import { useState } from 'react';
export default function ActivityOne() {
  const [size, setSize] = useState<number>(12);
  const [textColor, setTextColor] = useState<string>('black');

  const growHandler = () => {
    // doubles in size on click.
    setSize(size * 2);
    setTextColor(getRandomColor());
  };

  // Modify the button to also change to a random color for every click.
  const getRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  return (
    <main>
      <section className="container">
        <div className="flex justify-center">
          <button
            onClick={growHandler}
            className="bg-red-800"
            style={{ fontSize: `${size}px`, color: textColor }}
          >
            GROW
          </button>
        </div>
      </section>
      <section>
        <pre>{JSON.stringify(size, null, 2)}</pre>
        <pre>{JSON.stringify(textColor, null, 2)}</pre>
      </section>
    </main>
  );
}
