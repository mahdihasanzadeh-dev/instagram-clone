/* eslint-disable max-len */
import { SEO } from '@components/seo/seo';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { getProviders, signIn } from 'next-auth/react';
import type { BuiltInProviderType } from 'next-auth/providers';
import type { ISigninProperties } from './signin-interface';

const Signin = ({ providers }: ISigninProperties) => (
  <div className="flex items-center justify-center h-screen">
    <SEO
      pageTitle="Signin"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <div className="max-w-xs sm:max-w-xl flex flex-col">
      {
      providers !== null && Object.values(providers).map((provider) => (
        <button
          key={provider.name}
          type="button"
          onClick={async () => signIn(provider.id, {callbackUrl: '/' })}
          className="px-6 py-3 mt-4 font-semibold text-white bg-blue-400 border-1 border-white rounded-md shadow outline-none hover:border-blue-400 focus:outline-none"
        >
          Sign in with
          {' '}
          {provider.name}
        </button>
      ))
    }
    </div>
  </div>
);

export async function getServerSideProps() {
  const providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null = await getProviders();

  return {
    props: { providers },
  };
}

export default Signin;
