import profile from '@assets/images/profile.jpg';
import type { IPost } from '@components/post/post-interface';

export const posts: IPost[] = [
  {
    id: '123',
    username: 'John Doe',
    postPhoto: profile,
    profilePhoto: profile,
    caption: 'Hello from the caption',
  },
  {
    id: '234',
    username: 'Mike Flish',
    postPhoto: profile,
    profilePhoto: profile,
    caption: 'Hello from the caption',
  },
];
