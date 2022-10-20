import type { BuiltInProviderType } from 'next-auth/providers';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';

export interface ISigninProperties {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
}
