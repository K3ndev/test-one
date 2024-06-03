import { redirect } from 'next/navigation';
import { AddTodo } from './_actions/addTodo-action';
import SignOutButton from './_component/signOutButton';
import { TodoItem } from './_component/todo';
import { createClient } from './utils/supabase/server';

// Activity 8: (Optional) Create a simple to-do list application using Supabase (feel free to re-use your answer in Activity 1, and just save the to-do list state in the database)

// 1. Maintains the application state on browser restart.
// 2. Todo list should be able to demonstrate firebase CRUD operations (Create, Read, Update, Delete)
// 3. Add authentication. User should not be able to see to-do list without being logged in.

export default async function ActivityEight() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const { data: todos } = await supabase.from('todos').select('*');

  return (
    <main>
      <section className="container">
        <SignOutButton />
        <ul>
          {todos?.map((item, index: number) => {
            return (
              <li key={index} className="mb-1 flex gap-2">
                <TodoItem id={item.id} isCheck={item.isCheck} todo={item.todo} />
              </li>
            );
          })}
        </ul>
        <form action={AddTodo}>
          <input type="text" name="newTodo" placeholder="add new todo here" />
          <button type="submit" className="bg-red-800 text-black">
            submit
          </button>
        </form>
      </section>
    </main>
  );
}
