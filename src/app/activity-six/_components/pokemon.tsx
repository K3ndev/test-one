'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import Image from 'next/image';
import useSWR from 'swr';
import { type Ability2 } from './pokemonType';
// Activity 6: Create a “CardList” that displays API data below as “Cards” in the following format: Each “Card” should contain at least an avatar, the avatar’s name, and a description. How it looks depends entirely up to you.

// https://random-data-api.com
// https://pokeapi.co
// Your choice of API that at least provides an avatar, some name, and some description.
// Use CSS Flexbox. We will resize your browser window and your project should adapt to the browser window.

// todo
// I want to use streaming (combination of ssr and suspense) but pokemon api send specific url in each pokemon so I just fetch it in client component

export default function Pokemon({ url }: { url: string }) {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>pokemon api is unreachable</div>;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{data?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          alt="dew"
          src={data?.sprites?.other?.['official-artwork']?.front_shiny}
          height={50}
          width={50}
        />
        <p>Abilities</p>
        {data?.abilities.map((item: Ability2, index: number) => {
          return <p key={index}>{item?.ability?.name}</p>;
        })}
      </CardContent>
    </Card>
  );
}
