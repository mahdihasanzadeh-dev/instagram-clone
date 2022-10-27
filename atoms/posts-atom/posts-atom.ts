/* eslint-disable @typescript-eslint/naming-convention */
import type { IPost } from '@components/post/post-interface';
import type { RecoilState } from 'recoil';
import { atom } from 'recoil';

const initialState : IPost[] = [];

export const postsState:RecoilState<IPost[]> = atom<IPost[]>({
  key: 'postsState',
  default: initialState,
});
