import Image from 'next/image';
import type { ReactElement } from 'react';
import type { IStoryProperties } from './story-interface';

export function Story({ username, avatar }: IStoryProperties): ReactElement {
  return (
    <div>
      <div className=" p-[1.5px] border-[3px] w-16 h-16 rounded-full border-red-500">
        <Image
          src={avatar}
          alt={username}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <p className="text-xs w-[60px] truncate text-center">{username}</p>
    </div>
  );
}
