'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { TodoItem } from './_component/todo';
import { useTodoStore } from './_store/activity-five-store';

// Activity 5: Create a basic to-do list.
// 1. Check and uncheck list item.
// 2. Add or remove list item from list.

export default function ActivityFive() {
  // I use zustand for state management, this is similar to redux/redux toolkit
  const { todos, addTodo } = useTodoStore();
  const [todo, setTodo] = useState<string>('');

  const handleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todo === '') {
      return;
    }

    // using uuid is ideal here
    const newTodo = { todo, id: Math.random(), isCheck: false };
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <main>
      <section className="container mb-5">
        {todos.map((item, index: number) => {
          return (
            <div key={index} className="mb-1 flex gap-2">
              <TodoItem isCheck={item.isCheck} id={item.id} todo={item.todo} />
            </div>
          );
        })}
        <div>
          <form onSubmit={handleAddTodo}>
            <input type="text" value={todo} onChange={handleTodo} placeholder="add todo here" />
            <button className="bg-red-800 text-black" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="container">
        <p>zustand state management result:</p>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </section>
    </main>
  );
}
