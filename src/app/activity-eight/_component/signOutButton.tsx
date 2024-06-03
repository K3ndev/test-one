'use client';
import { SignOut } from './signOut-action';

export default function SignOutButton() {
  return (
    <button onClick={async () => await SignOut()} className="bg-red-800 text-black">
      signout
    </button>
  );
}
