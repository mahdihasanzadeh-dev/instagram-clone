import type { NextPage } from 'next';
import { SEO } from '@components/seo/seo';
import { Feed } from '@components/feed/feed';
import { Modal } from '@components/modal/modal';

const Home: NextPage = () => (
  <>
    <SEO
      pageTitle="Instagram"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <Feed />
    <Modal />
  </>
);

export default Home;
