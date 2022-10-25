import type { NextPage } from 'next';
import { SEO } from '@components/seo/seo';
import { Feed } from '@components/feed/feed';
import { Modal } from '@components/modal/modal';
import { getPosts } from '@common/common-function';
import type { IHomeProperties } from '@common/common-interface';

const Home: NextPage<IHomeProperties> = ({ posts }) => (
  <>
    <SEO
      pageTitle="Instagram"
      description="Instagram v2 clone by nextjs"
      keywords={['instagram', 'nextjs', 'tailwind']}
    />
    <Feed posts={posts} />
    <Modal />
  </>
);

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Home;
