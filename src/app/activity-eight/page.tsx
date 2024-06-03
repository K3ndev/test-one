import { redirect } from 'next/navigation';
import SignOutButton from './_component/signOutButton';
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

  return (
    <main>
      <section className="container">
        <p>hello</p>
        <SignOutButton />
      </section>
    </main>
  );
}
