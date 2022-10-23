/* eslint-disable @typescript-eslint/naming-convention */
import type { RecoilState } from 'recoil';
import { atom } from 'recoil';

const initialState : boolean = false;

export const modalState:RecoilState<boolean> = atom<boolean>({
  key: 'modalState',
  default: initialState,
});
