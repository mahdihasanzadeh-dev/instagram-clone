import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { Story } from '@components/story/story';
import { useSession } from 'next-auth/react';
import type { IStoriesState } from './stories-interface';
import { storiesHelper } from './stories-helper';

export function Stories(): ReactElement {
  const [stories, setStories] = useState<IStoriesState[]>([]);
  const helper = storiesHelper(setStories);
  const { data: session } = useSession();

  useEffect(():void => {
    helper.setStoriesData();
  }, []);

  return (
    <div>
      <div
        className="flex space-x-4 bg-white border overflow-x-scroll rounded-lg  scrollbar-thin scrollbar-thumb-gray-300 p-5"
      >
        {
          session && (
          <Story
            avatar={session.user?.image ?? ''}
            username={session.user?.name ?? 'profile'}
          />
          )
        }

        {
          stories.map((profile: IStoriesState) => {
            const { userId, username, avatar } = profile;
            return (
              <Story
                key={userId}
                username={username}
                avatar={avatar}
              />
            );
          })
        }
      </div>
    </div>
  );
}
