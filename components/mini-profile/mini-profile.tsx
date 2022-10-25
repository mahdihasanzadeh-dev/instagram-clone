import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import type { ReactElement } from 'react';

export function MiniProfil(): ReactElement {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between">
      <div className="border p-[2px] rounded-full w-16 h-16">
        <Image
          src={session?.user?.image ?? ''}
          alt={session?.user?.name ?? 'username'}
          className="rounded-full "
          width={64}
          height={64}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">{session?.user?.name ?? ''}</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>
      <button
        type="button"
        className="text-blue-400 font-semibold text-sm"
        onClick={async () => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
