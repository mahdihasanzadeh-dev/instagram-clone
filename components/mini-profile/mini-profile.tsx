import Image from 'next/image';
import type { ReactElement } from 'react';
import avatar from '@assets/images/profile.jpg';

export function MiniProfil(): ReactElement {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div className="border p-[2px] rounded-full w-16 h-16">
        <Image
          src={avatar}
          alt="profileIcon"
          className="rounded-full "
        />
      </div>
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">John Doe</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>
      <button
        type="button"
        className="text-blue-400 font-semibold text-sm"
      >
        Sign out
      </button>
    </div>
  );
}
