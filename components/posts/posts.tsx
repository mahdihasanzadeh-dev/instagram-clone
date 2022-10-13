import { Post } from '@components/post/post';
import type { IPost } from '@components/post/post-interface';
import type { ReactElement } from 'react';
import { posts } from './posts-helper';

export function Posts(): ReactElement {
  return (
    <div>
      {
        posts.map((post:IPost) => {
          const { id, username, postPhoto, profilePhoto, caption } = post;
          return (
            <Post
              id={id}
              key={id}
              username={username}
              postPhoto={postPhoto}
              profilePhoto={profilePhoto}
              caption={caption}
            />
          );
        })
      }
    </div>
  );
}
