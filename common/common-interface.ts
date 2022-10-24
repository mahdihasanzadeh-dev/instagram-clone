/* eslint-disable @typescript-eslint/naming-convention */
import type { ISODateString } from 'next-auth/core/types';
import type { AppPropsType } from 'next/dist/shared/lib/utils';
import type { Router } from 'next/router';
import type { SetStateAction } from 'react';

export type ISetState<T> = (value: SetStateAction<T>) => void;

export interface ISession {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        username? : string | null;
        uid? : string | null;
    };
    expires: ISODateString;
}

export declare type AppProps<P = { session: ISession}> = AppPropsType<Router, P>;
