import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { Story } from '@components/story/story';
import type { IStoriesState } from './stories-interface';
import { storiesHelper } from './stories-helper';

export function Stories(): ReactElement {
  const [stories, setStories] = useState<IStoriesState[]>([]);
  const helper = storiesHelper(setStories);

  useEffect(():void => {
    helper.setStoriesData();
  }, []);

  return (
    <div>
      <div
        className="flex space-x-4 bg-white border overflow-x-scroll rounded-lg mx-1 scrollbar-thin scrollbar-thumb-gray-300 p-5"
      >
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
