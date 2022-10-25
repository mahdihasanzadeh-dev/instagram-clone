import type { ReactElement } from 'react';
import { useId } from 'react';
import type { IHomeProperties } from '@common/common-interface';
import { Post } from '@components/post/post';
import type { IPost } from '@components/post/post-interface';

export function Posts({ posts }: IHomeProperties): ReactElement {
  return (
    <>
      {
        posts.map((post:IPost) => {
          const { username, image, caption, profileImg } = post;
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const id = useId();
          return (
            <Post
              key={id}
              username={username}
              image={image}
              caption={caption}
              profileImg={profileImg}
            />
          );
        })
      }
    </>
  );
}
