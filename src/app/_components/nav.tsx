'use client';

import Link from 'next/link';

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function Nav() {
  return (
    <div className="flex gap-5">
      <Link href="/" className="font-inter text-xl underline">
        Home
      </Link>
      <Link href="/activity-one" className="font-montserrat text-xl underline">
        Activity 1
      </Link>
      <Link href="/activity-two" className="font-montserrat text-xl underline">
        Activity 2
      </Link>
      <Link href="/activity-three" className="font-montserrat text-xl underline">
        Activity 3
      </Link>
      <Link href="/activity-four" className="font-montserrat text-xl underline">
        Activity 4
      </Link>
      <Link href="/activity-five" className="font-montserrat text-xl underline">
        Activity 5
      </Link>
      <Link href="/activity-six" className="font-montserrat text-xl underline">
        Activity 6
      </Link>
      <Link href="/activity-seven" className="font-montserrat text-xl underline">
        Activity 7
      </Link>
      <Link href="/activity-eight" className="font-montserrat text-xl underline">
        Activity 8
      </Link>
    </div>
  );
}
