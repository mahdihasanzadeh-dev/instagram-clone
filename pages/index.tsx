import type { NextPage } from 'next';
import { SEO } from '@components/seo/seo';

const Home: NextPage = () => (
  <>
    <SEO
      pageTitle="Instagram"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <h1>Hello World</h1>
  </>
);

export default Home;
