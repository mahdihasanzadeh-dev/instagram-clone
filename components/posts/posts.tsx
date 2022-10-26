import type { ReactElement } from 'react';
import type { IHomeProperties } from '@common/common-interface';
import { Post } from '@components/post/post';
import type { IPost } from '@components/post/post-interface';

export function Posts({ posts }: IHomeProperties): ReactElement {
  return (
    <>
      {
        posts.map((post:IPost) => {
          const { id, username, image, caption, profileImg } = post;

          return (
            <Post
              key={id}
              id={id}
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
