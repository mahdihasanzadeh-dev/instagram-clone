import Image from 'next/image';
import type { ISuggestionsState } from '@components/suggestions/suggestions-interface';
import type { ReactElement } from 'react';
import { suggestionHelper } from './suggestion-helper';

export function Suggestion({ userId, username, avatar, company }: ISuggestionsState): ReactElement {
  const helper = suggestionHelper(userId);

  return (
    <div className="flex items-center justify-between mt-3">
      <div className="border p-[2px] rounded-full w-10 h-10">
        <Image
          src={avatar}
          alt={username}
          className="rounded-full "
          width={40}
          height={40}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="text-gray-400 text-xs">
          Work at
          {' '}
          {company}
        </h3>
      </div>
      <button
        type="button"
        className="text-blue-400 text-sm cursor-pointer"
        onClick={helper.followHandler}
      >
        Follow
      </button>
    </div>
  );
}
