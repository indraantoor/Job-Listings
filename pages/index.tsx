import Head from 'next/head';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <main>hello</main>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <div>
      <Head>
        <title>Job Search</title>
        <meta name="description" content="Created by Indraan S Toor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {page}
    </div>
  );
};
