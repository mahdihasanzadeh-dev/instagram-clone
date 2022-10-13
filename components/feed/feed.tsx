import { MiniProfil } from '@components/mini-profile/mini-profile';
import { Posts } from '@components/posts/posts';
import { Stories } from '@components/stories/stories';
import { Suggestions } from '@components/suggestions/suggestions';
import type { ReactElement } from 'react';

export function Feed(): ReactElement {
  return (
    <div>
      <section className="mt-4">
        <Stories />
        <Posts />
      </section>
      <section>
        <MiniProfil />
        <Suggestions />
      </section>
    </div>
  );
}
