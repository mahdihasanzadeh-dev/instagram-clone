import { MiniProfil } from '@components/mini-profile/mini-profile';
import { Posts } from '@components/posts/posts';
import { Stories } from '@components/stories/stories';
import { Suggestions } from '@components/suggestions/suggestions';
import type { ReactElement } from 'react';

export function Feed(): ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto mt-4">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <MiniProfil />
          <Suggestions />
        </div>
      </section>
    </div>
  );
}
