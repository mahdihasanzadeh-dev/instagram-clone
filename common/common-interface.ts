/* eslint-disable @typescript-eslint/naming-convention */
import type { Session } from 'next-auth/core/types';
import type { AppPropsType } from 'next/dist/shared/lib/utils';
import type { Router } from 'next/router';
import type { SetStateAction } from 'react';

export type ISetState<T> = (value: SetStateAction<T>) => void;

export declare type AppProps<P = { session: Session}> = AppPropsType<Router, P>;
