// Activity 6: Create a “CardList” that displays API data below as “Cards” in the following format: Each “Card” should contain at least an avatar, the avatar’s name, and a description. How it looks depends entirely up to you.

import PokemonList from './_components/pokemonList';

// https://random-data-api.com
// https://pokeapi.co
// Your choice of API that at least provides an avatar, some name, and some description.
// Use CSS Flexbox. We will resize your browser window and your project should adapt to the browser window.

// todo
// im going to use streaming here to fetch data, its a combination of ssr and suspense

export default async function ActivitySix() {
  return (
    <main>
      <section className="container">
        <PokemonList />
      </section>
    </main>
  );
}
