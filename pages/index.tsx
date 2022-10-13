import type { NextPage } from 'next';
import { SEO } from '@components/seo/seo';
import { Feed } from '@components/feed/feed';

const Home: NextPage = () => (
  <div>
    <SEO
      pageTitle="Instagram"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <Feed />
  </div>
);

export default Home;
