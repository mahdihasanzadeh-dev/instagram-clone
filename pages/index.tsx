import type { NextPage } from 'next';
import { SEO } from '@components/seo/seo';
import { Feed } from '@components/feed/feed';

const Home: NextPage = () => (
  <>
    <SEO
      pageTitle="Instagram"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <Feed />
  </>
);

export default Home;
