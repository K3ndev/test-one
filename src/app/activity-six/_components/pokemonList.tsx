// Activity 6: Create a “CardList” that displays API data below as “Cards” in the following format: Each “Card” should contain at least an avatar, the avatar’s name, and a description. How it looks depends entirely up to you.

import Pokemon from './pokemon';

// https://random-data-api.com
// https://pokeapi.co
// Your choice of API that at least provides an avatar, some name, and some description.
// Use CSS Flexbox. We will resize your browser window and your project should adapt to the browser window.

// todo
// im going to use streaming here to fetch data, its a combination of ssr and suspense

export default async function PokemonList() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return (
    <section>
      {/* alternative solution is using flex, but in this case I will argue that we should use grid not flex */}
      {/* flex flex-wrap md:gap-3 lg:grid-cols-4 lg:gap-4 */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {data.results.map((item: { name: string; url: string }, index: number) => {
          return (
            <div key={index} className="">
              <Pokemon url={item.url} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
