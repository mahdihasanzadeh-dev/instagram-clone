import type { ReactElement } from 'react';
import { Post } from '@components/post/post';
import { useRecoilState } from 'recoil';
import { postsState } from '@atoms/posts-atom/posts-atom';
import type { IPost } from '@components/post/post-interface';
import type { IHomeProperties } from '@common/common-interface';

export function Posts({ posts }:IHomeProperties): ReactElement {
  const [postsData] = useRecoilState<IPost[]>(postsState);

  return (
    <>
      {
        postsData.map((post:IPost) => {
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
