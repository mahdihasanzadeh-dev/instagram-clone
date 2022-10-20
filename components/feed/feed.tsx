import { MiniProfil } from '@components/mini-profile/mini-profile';
import { Posts } from '@components/posts/posts';
import { Stories } from '@components/stories/stories';
import { Suggestions } from '@components/suggestions/suggestions';
import { useSession } from 'next-auth/react';
import type { ReactElement } from 'react';

export function Feed(): ReactElement {
  const { data: session } = useSession();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto mt-4 ${!session ? '!grid-cols-1 !max-w-3xl' : ''}`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {
        session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20 mt-4 ml-10">
            <MiniProfil />
            <Suggestions />
          </div>
        </section>
        )
      }
    </div>
  );
}
